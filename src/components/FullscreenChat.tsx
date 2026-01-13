import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { X, Loader2, Sparkles, Trash2, Download, ArrowDown } from "lucide-react";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import logoIcon from "@/assets/logo-icon.png";
import { supabase } from "@/integrations/supabase/client";
import type { ChatActivationSource } from "@/types/chat";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface MessageContent {
  type: "text" | "image_url";
  text?: string;
  image_url?: { url: string };
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string | MessageContent[];
  imagePreview?: string;
}

interface FullscreenChatProps {
  isOpen: boolean;
  onClose: () => void;
  activationSource: ChatActivationSource;
  chatInput: string;
  onChatInputChange: (value: string) => void;
  submitTrigger: number;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/haircare-chat`;

const FullscreenChat = ({
  isOpen,
  onClose,
  activationSource,
  chatInput,
  onChatInputChange,
  submitTrigger,
}: FullscreenChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [displayedWelcomeText, setDisplayedWelcomeText] = useState("");
  const [isTypingWelcome, setIsTypingWelcome] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastSubmitTrigger = useRef(0);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  // Handle close with fade animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "end"
    });
  }, []);

  // Check if user is near bottom of messages
  const checkScrollPosition = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const threshold = 100; // pixels from bottom
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
    setShowScrollToBottom(!isNearBottom);
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollPosition);
    return () => container.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);

  useEffect(() => {
    // Slight delay to ensure DOM is updated before scrolling
    const timer = setTimeout(() => {
      scrollToBottom();
      // Re-check scroll position after scrolling
      setTimeout(checkScrollPosition, 100);
    }, 50);
    return () => clearTimeout(timer);
  }, [messages, displayedWelcomeText, scrollToBottom, checkScrollPosition]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startChat();
    }
  }, [isOpen]);

  // Handle submit from FloatingChatBar
  useEffect(() => {
    if (submitTrigger > lastSubmitTrigger.current && isOpen) {
      lastSubmitTrigger.current = submitTrigger;
      handleSubmit();
    }
  }, [submitTrigger, isOpen]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isClosing) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isClosing]);

  const startChat = async () => {
    setIsLoading(true);
    setIsTypingWelcome(false);
    setDisplayedWelcomeText("");

    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [] }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          toast.error("Rate limit reached. Please try again in a moment.");
        } else if (response.status === 402) {
          toast.error("Service temporarily unavailable.");
        } else {
          toast.error(errorData.error || "Failed to start chat");
        }
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      await processStreamResponse(response, undefined, true);
    } catch (error) {
      console.error("Failed to start chat:", error);
      toast.error("Failed to connect. Please try again.");
      setIsLoading(false);
    }
  };

  const processStreamResponse = async (response: Response, messageId?: string, isWelcome: boolean = false) => {
    if (!response.body) {
      setIsLoading(false);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    const assistantMessageId = messageId || Date.now().toString();

    // For welcome message, we'll collect the full text first then typewrite it
    if (isWelcome) {
      setIsTypingWelcome(true);
      setDisplayedWelcomeText("");
    }

    setMessages(prev => {
      const hasMessage = prev.some(m => m.id === assistantMessageId);
      if (!hasMessage) {
        return [...prev, { id: assistantMessageId, role: "assistant", content: "" }];
      }
      return prev;
    });

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              if (!isWelcome) {
                setMessages(prev =>
                  prev.map(m =>
                    m.id === assistantMessageId
                      ? { ...m, content: assistantContent }
                      : m
                  )
                );
              }
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              if (!isWelcome) {
                setMessages(prev =>
                  prev.map(m =>
                    m.id === assistantMessageId
                      ? { ...m, content: assistantContent }
                      : m
                  )
                );
              }
            }
          } catch { /* ignore */ }
        }
      }

      // Typewriter effect for welcome message
      if (isWelcome && assistantContent) {
        const fullText = assistantContent;
        let charIndex = 0;
        const typeSpeed = 20; // ms per character for readable pace

        const typeNextChar = () => {
          if (charIndex < fullText.length) {
            charIndex++;
            setDisplayedWelcomeText(fullText.slice(0, charIndex));
            setMessages(prev =>
              prev.map(m =>
                m.id === assistantMessageId
                  ? { ...m, content: fullText.slice(0, charIndex) }
                  : m
              )
            );
            setTimeout(typeNextChar, typeSpeed);
          } else {
            setIsTypingWelcome(false);
          }
        };

        typeNextChar();
      }
    } finally {
      if (!isWelcome) {
        setIsLoading(false);
      }
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${file.name.split('.').pop()}`;

      const { error: uploadError } = await supabase.storage
        .from('hair-photos')
        .upload(fileName, file);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        toast.error("Failed to upload image");
        return null;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('hair-photos')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
      return null;
    }
  };

  const handleSubmit = async () => {
    if ((!chatInput.trim() && !selectedImage) || isLoading) return;

    let base64Image: string | null = null;

    if (selectedImage && imagePreview) {
      base64Image = imagePreview;
      await uploadImage(selectedImage);
    }

    let userMessageContent: string | MessageContent[];
    const textContent = chatInput.trim();

    if (base64Image) {
      userMessageContent = [];
      if (textContent) {
        userMessageContent.push({ type: "text", text: textContent });
      } else {
        userMessageContent.push({ type: "text", text: "Please analyze this photo of my hair/scalp and let me know what you observe." });
      }
      userMessageContent.push({
        type: "image_url",
        image_url: { url: base64Image }
      });
    } else {
      userMessageContent = textContent;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessageContent,
      imagePreview: imagePreview || undefined
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    onChatInputChange("");
    removeSelectedImage();
    setIsLoading(true);

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          toast.error("Rate limit reached. Please try again in a moment.");
        } else if (response.status === 402) {
          toast.error("Service temporarily unavailable.");
        } else {
          toast.error(errorData.error || "Failed to get response");
        }
        setIsLoading(false);
        return;
      }

      await processStreamResponse(response, (Date.now() + 1).toString());
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Failed to send message. Please try again.");
      setIsLoading(false);
    }
  };

  const getMessageText = (content: string | MessageContent[]): string => {
    if (typeof content === 'string') return content;
    const textPart = content.find(c => c.type === 'text');
    return textPart?.text || '';
  };

  const getMessageImage = (message: Message): string | null => {
    if (message.imagePreview) return message.imagePreview;
    if (typeof message.content === 'string') return null;
    const imagePart = message.content.find(c => c.type === 'image_url');
    return imagePart?.image_url?.url || null;
  };

  // Expose file input trigger for FloatingChatBar
  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  // Make attachment click available to parent via window
  useEffect(() => {
    if (isOpen) {
      (window as any).__chatAttachmentClick = handleAttachmentClick;
    }
    return () => {
      delete (window as any).__chatAttachmentClick;
    };
  }, [isOpen]);

  // Clear chat function
  const handleClearChat = () => {
    setMessages([]);
    setDisplayedWelcomeText("");
    startChat();
    toast.success("Chat cleared");
  };

  // Download chat as branded PDF
  const handleDownloadChat = async () => {
    if (messages.length === 0) {
      toast.error("No messages to download");
      return;
    }

    const getHslVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const hslToRgb = (hsl: string) => {
      // "H S% L%" -> {r,g,b}
      const [hStr, sStr, lStr] = hsl.split(/\s+/);
      const h = Number(hStr) / 360;
      const s = Number(sStr.replace('%', '')) / 100;
      const l = Number(lStr.replace('%', '')) / 100;

      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      let r: number, g: number, b: number;
      if (s === 0) {
        r = g = b = l;
      } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
      };
    };

    const primary = hslToRgb(getHslVar('--primary') || '175 45% 45%');
    const foreground = hslToRgb(getHslVar('--foreground') || '220 15% 20%');
    const muted = hslToRgb(getHslVar('--muted') || '210 15% 92%');

    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Load logo as data URL
    const logoDataUrl = await (async () => {
      const res = await fetch(logoIcon);
      const blob = await res.blob();
      return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.readAsDataURL(blob);
      });
    })();

    const left = 24;
    const right = 24;
    const maxWidth = pageWidth - left - right;
    const bubblePadding = 12;
    const bubbleRadius = 8;
    const headerHeight = 80;
    const footerHeight = 40;
    let pageNumber = 1;

    // Draw header on page
    const drawHeader = () => {
      doc.setFillColor(primary.r, primary.g, primary.b);
      doc.rect(0, 0, pageWidth, headerHeight, 'F');

      // White circle behind logo
      doc.setFillColor(255, 255, 255);
      doc.circle(38, 40, 22, 'F');

      try {
        doc.addImage(logoDataUrl, 'PNG', 20, 22, 36, 36);
      } catch {
        // ignore if image can't be embedded
      }

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('HairCare.ai — Chat History', 72, 38);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Downloaded: ${new Date().toLocaleString()}`, 72, 54);
    };

    // Draw footer with page number
    const drawFooter = () => {
      doc.setDrawColor(muted.r, muted.g, muted.b);
      doc.setLineWidth(0.5);
      doc.line(left, pageHeight - footerHeight, pageWidth - right, pageHeight - footerHeight);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(foreground.r, foreground.g, foreground.b);
      doc.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight - 20, { align: 'center' });
      doc.text('HairCare.ai', left, pageHeight - 20);
      doc.text('Educational guidance only', pageWidth - right, pageHeight - 20, { align: 'right' });
    };

    // Initialize first page
    drawHeader();
    let y = headerHeight + 20;

    const addPageIfNeeded = (nextY: number) => {
      if (nextY > pageHeight - footerHeight - 20) {
        drawFooter();
        doc.addPage();
        pageNumber++;
        drawHeader();
        y = headerHeight + 20;
      }
    };

    // Section separator
    const drawSeparator = () => {
      doc.setDrawColor(muted.r, muted.g, muted.b);
      doc.setLineWidth(0.3);
      doc.line(left + 20, y, pageWidth - right - 20, y);
      y += 12;
    };

    messages.forEach((m, idx) => {
      const roleLabel = m.role === 'user' ? 'You' : 'AI Hair Advisor';
      const text = typeof m.content === 'string'
        ? m.content
        : (m.content.find(c => c.type === 'text')?.text || '');

      const lines = doc.splitTextToSize(text || '(no text)', maxWidth - bubblePadding * 2 - 10);

      // Role label
      addPageIfNeeded(y + 20);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(m.role === 'user' ? primary.r : foreground.r, m.role === 'user' ? primary.g : foreground.g, m.role === 'user' ? primary.b : foreground.b);
      doc.text(roleLabel, left + 4, y);
      y += 14;

      // Bubble
      const lineHeight = 13;
      const bubbleHeight = lines.length * lineHeight + bubblePadding * 2;
      addPageIfNeeded(y + bubbleHeight + 20);

      if (m.role === 'user') {
        doc.setFillColor(primary.r, primary.g, primary.b);
        doc.setTextColor(255, 255, 255);
      } else {
        doc.setFillColor(muted.r, muted.g, muted.b);
        doc.setTextColor(foreground.r, foreground.g, foreground.b);
      }

      // Draw bubble
      if (typeof (doc as any).roundedRect === 'function') {
        (doc as any).roundedRect(left, y, maxWidth, bubbleHeight, bubbleRadius, bubbleRadius, 'F');
      } else {
        doc.rect(left, y, maxWidth, bubbleHeight, 'F');
      }

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      lines.forEach((line: string, lineIdx: number) => {
        doc.text(line, left + bubblePadding, y + bubblePadding + 10 + lineIdx * lineHeight);
      });

      y += bubbleHeight + 16;

      // Draw separator between messages (except after last)
      if (idx < messages.length - 1) {
        addPageIfNeeded(y + 12);
        drawSeparator();
      }
    });

    // Draw footer on last page
    drawFooter();

    doc.save(`haircare-chat-${new Date().toISOString().split('T')[0]}.pdf`);
    toast.success('Chat PDF downloaded');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/50 dark:bg-background/80 backdrop-blur-[16px]"
      style={{
        WebkitBackdropFilter: 'blur(16px)',
        opacity: isClosing ? 0 : 1,
        transition: 'opacity 300ms ease-out',
      }}
    >
      {/* Top action buttons */}
      <div className="absolute top-20 right-4 z-[110] flex flex-col-reverse sm:flex-row items-center gap-2">
        <button
          onClick={() => void handleDownloadChat()}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 active:bg-primary/30 transition-colors shadow-sm"
          style={{ touchAction: 'manipulation' }}
          title="Download chat history"
          aria-label="Download chat history"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className="w-10 h-10 sm:w-11 sm:h-11 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 active:bg-primary/30 transition-colors shadow-sm"
              style={{ touchAction: 'manipulation' }}
              title="Clear chat"
              aria-label="Clear chat"
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear conversation?</AlertDialogTitle>
              <AlertDialogDescription>
                This will remove all messages from this chat. This can't be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive" onClick={handleClearChat}>
                  Clear chat
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="w-10 h-10 sm:w-11 sm:h-11 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 active:bg-primary/30 transition-colors shadow-sm"
          style={{ touchAction: 'manipulation' }}
          title="Close chat"
          aria-label="Close chat"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </button>
      </div>

      {/* Chat container */}
      <div className="h-full flex flex-col max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="pt-8 pb-4 text-center animate-slide-down relative">
          {/* Mobile close button in header - visible on small screens */}
          <button
            onClick={handleClose}
            className="absolute top-0 left-0 sm:hidden w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center hover:bg-muted active:bg-muted/80 transition-colors shadow-2xl z-[120]"
            style={{ touchAction: 'manipulation' }}
            title="Close chat"
            aria-label="Close chat"
          >
            <X className="w-6 h-6 text-foreground font-bold" />
          </button>

          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI Hair Advisor</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Private & confidential conversation
          </p>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto py-4 pb-40 pr-4 animate-fade-in scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent w-[93%] sm:w-full"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`${message.role === "user" ? "flex justify-end" : "w-full"} animate-fade-in`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both',
                }}
              >
                {message.role === "user" ? (
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-primary text-primary-foreground rounded-br-lg">
                    {getMessageImage(message) && (
                      <img
                        src={getMessageImage(message)!}
                        alt="Uploaded"
                        className="max-w-full max-h-48 rounded-lg mb-2 object-cover"
                      />
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {getMessageText(message.content)}
                    </p>
                  </div>
                ) : (
                  <div className="w-full py-2">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap text-foreground">
                      {getMessageText(message.content)}
                      {isTypingWelcome && index === 0 && message.role === "assistant" && (
                        <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" style={{ verticalAlign: 'text-bottom' }} />
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="w-full py-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Scroll to latest button */}
          {showScrollToBottom && (
            <button
              onClick={() => scrollToBottom()}
              className="sticky bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all animate-fade-in"
              aria-label="Scroll to latest message"
            >
              <ArrowDown className="w-4 h-4" />
              <span className="text-xs font-medium">Latest</span>
            </button>
          )}
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="fixed bottom-36 left-1/2 -translate-x-1/2 z-[70]" style={{ maxWidth: '56rem', width: 'calc(100% - 32px)' }}>
            <div className="relative inline-block">
              <img
                src={imagePreview}
                alt="Selected"
                className="h-20 w-20 object-cover rounded-xl"
              />
              <button
                onClick={removeSelectedImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs hover:bg-destructive/90"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FullscreenChat;
