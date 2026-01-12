import { useState, useEffect, useRef } from "react";
import type { ChatActivationSource } from "@/types/chat";
import ChatInputBar from "./ChatInputBar";

interface FloatingChatBarProps {
  onOpenChat: (source: ChatActivationSource) => void;
  isChatOpen: boolean;
  activationSource: ChatActivationSource;
  // Chat mode props
  chatInput?: string;
  onChatInputChange?: (value: string) => void;
  onChatSubmit?: (e: React.FormEvent) => void;
  onAttachmentClick?: () => void;
  isLoading?: boolean;
  hasAttachment?: boolean;
  forceCompact?: boolean;
}

const FloatingChatBar = ({
  onOpenChat,
  isChatOpen,
  activationSource,
  chatInput = "",
  onChatInputChange,
  onChatSubmit,
  onAttachmentClick,
  isLoading = false,
  hasAttachment = false,
  forceCompact = false,
}: FloatingChatBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(forceCompact);
  const [wasMinimized, setWasMinimized] = useState(forceCompact);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle mobile keyboard visibility
  useEffect(() => {
    const handleViewportChange = () => {
      if (window.visualViewport) {
        const vv = window.visualViewport;
        // On mobile, the keyboard reduces the visual viewport height.
        // Compute how much of the bottom of the layout viewport is obscured.
        const inset = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
        setKeyboardHeight(inset > 50 ? inset : 0);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      window.visualViewport.addEventListener('scroll', handleViewportChange);
      // Initial call
      handleViewportChange();
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isChatOpen && !forceCompact) {
        const scrollY = window.scrollY;
        const newMinimized = scrollY > 200;
        setWasMinimized(isMinimized);
        setIsMinimized(newMinimized);
      } else if (forceCompact && !isChatOpen) {
        setIsMinimized(true);
      }
    };

    // Set initial state for forceCompact pages
    if (forceCompact && !isChatOpen) {
      setIsMinimized(true);
      setWasMinimized(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isChatOpen, forceCompact, isMinimized]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => inputRef.current?.focus(), 800);
    }
  }, [isChatOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChatOpen && onChatSubmit) {
      onChatSubmit(e);
    } else {
      onOpenChat(isMinimized ? 'compact' : 'expanded');
    }
  };

  const handleInputFocus = () => {
    if (!isChatOpen) {
      onOpenChat('expanded');
    }
  };

  const handleAttachmentClick = () => {
    if (isChatOpen) {
      // Call the FullscreenChat's file input trigger
      (window as any).__chatAttachmentClick?.();
    } else {
      onOpenChat(isMinimized ? 'compact' : 'expanded');
    }
  };

  // Determine position based on state - same logic for all pages
  // Always use 'bottom' for smooth transitions (never switch between top/bottom)
  const getPosition = () => {
    // keyboardHeight here is actually the *bottom inset* (px) created by the on-screen keyboard.
    const dockGap = keyboardHeight > 0 ? 8 : 20;
    const dockBottom = `calc(${keyboardHeight + dockGap}px + env(safe-area-inset-bottom, 0px))`;

    if (isChatOpen) {
      // Docked near the bottom (or above the keyboard)
      return {
        bottom: dockBottom,
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '56rem',
      };
    }

    if (isMinimized) {
      // Compact pill at bottom
      return {
        bottom: dockBottom,
        transform: 'translateX(-50%)',
        width: '200px',
        maxWidth: '200px',
      };
    }

    // Expanded center position - use bottom: 50vh and translateY to center smoothly
    // This allows smooth transition when scrolling down (bottom value changes smoothly)
    return {
      bottom: '50vh',
      transform: 'translateX(-50%) translateY(50%)',
      width: 'calc(100% - 32px)',
      maxWidth: '56rem',
    };
  };

  const position = getPosition();
  const showExpanded = !isMinimized || isChatOpen;

  // Determine if we should show bounce animation (transitioning to minimized)
  const showBounceIn = isMinimized && !wasMinimized && !isChatOpen;
  const showBounceOut = !isMinimized && wasMinimized && !isChatOpen;

  // Get animation style for the compact pill
  const getAnimationStyle = () => {
    if (isChatOpen) {
      return 'bottom 800ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 800ms cubic-bezier(0.25, 0.1, 0.25, 1), width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1), max-width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
    // Fast smooth animation when minimizing (scrolling down) - smooth slide down
    if (showBounceIn) {
      return 'bottom 300ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1), width 300ms cubic-bezier(0.25, 0.1, 0.25, 1), max-width 300ms cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
    // Fast animation when expanding from bottom to up (showBounceOut) - smooth slide up
    if (showBounceOut) {
      return 'bottom 300ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1), width 300ms cubic-bezier(0.25, 0.1, 0.25, 1), max-width 300ms cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
    return 'bottom 800ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 800ms cubic-bezier(0.25, 0.1, 0.25, 1), width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1), max-width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)';
  };

  return (
    <div
      className={`fixed left-1/2 z-[110] px-4`}
      style={{
        ...position,
        transition: getAnimationStyle(),
      }}
    >
      <ChatInputBar
        inputValue={isChatOpen ? chatInput : inputValue}
        onInputChange={isChatOpen ? (onChatInputChange || (() => { })) : setInputValue}
        onSubmit={handleSubmit}
        onAttachmentClick={handleAttachmentClick}
        onInputFocus={handleInputFocus}
        isExpanded={showExpanded}
        isMinimized={isMinimized && !isChatOpen}
        isChatMode={isChatOpen}
        isLoading={isLoading}
        hasAttachment={hasAttachment}
        inputRef={inputRef}
        isExpanding={showBounceOut}
        isMinimizing={showBounceIn}
      />
      <p
        className="text-xs text-muted-foreground mt-3 text-center"
        style={{
          opacity: isChatOpen ? 1 : 0,
          transition: 'opacity 1000ms ease-out 800ms',
          pointerEvents: isChatOpen ? 'auto' : 'none',
        }}
      >
        This is educational guidance, not medical advice.
      </p>
    </div>
  );
};

export default FloatingChatBar;
