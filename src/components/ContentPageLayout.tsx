import { ReactNode, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChatBar from "@/components/FloatingChatBar";
import FullscreenChat from "@/components/FullscreenChat";
import TableOfContents from "@/components/TableOfContents";
import type { ChatActivationSource } from "@/types/chat";
import { ChatContext } from "@/contexts/ChatContext";
import { useLocation } from "react-router-dom";

interface ContentPageLayoutProps {
  children: ReactNode;
  showToc?: boolean;
}

const ContentPageLayout = ({ children, showToc = true }: ContentPageLayoutProps) => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activationSource, setActivationSource] = useState<ChatActivationSource>(null);

  // Pages where chat bar should always stay compact
  const compactChatPages = ['/sitemap', '/privacy-policy', '/terms-of-service'];
  const forceCompactChat = compactChatPages.includes(location.pathname);
  
  // Shared chat state
  const [chatInput, setChatInput] = useState("");
  const [chatSubmitTrigger, setChatSubmitTrigger] = useState(0);

  const handleOpenChat = useCallback((source: ChatActivationSource) => {
    setActivationSource(source);
    setIsChatOpen(true);
  }, []);

  const handleCloseChat = useCallback(() => {
    setIsChatOpen(false);
    setTimeout(() => setActivationSource(null), 500);
  }, []);

  const handleChatSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setChatSubmitTrigger(prev => prev + 1);
  }, []);

  // Exposed function for child components to open chat
  const openChat = useCallback(() => {
    handleOpenChat('expanded');
  }, [handleOpenChat]);

  return (
    <ChatContext.Provider value={{ openChat }}>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        {/* Main Content with optional TOC sidebar */}
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="flex gap-8">
              {/* Main content area */}
              <div className="flex-1 min-w-0">
                {children}
              </div>
              
              {/* Table of Contents sidebar */}
              {showToc && <TableOfContents />}
            </div>
          </div>
        </main>

        <Footer />
        
        {/* Floating Chat Input Bar - same behavior as landing page */}
        <FloatingChatBar 
          onOpenChat={handleOpenChat} 
          isChatOpen={isChatOpen}
          activationSource={activationSource}
          chatInput={chatInput}
          onChatInputChange={setChatInput}
          onChatSubmit={handleChatSubmit}
          forceCompact={forceCompactChat}
        />
        
        {/* Fullscreen Chat Modal */}
        <FullscreenChat 
          isOpen={isChatOpen} 
          onClose={handleCloseChat}
          activationSource={activationSource}
          chatInput={chatInput}
          onChatInputChange={setChatInput}
          submitTrigger={chatSubmitTrigger}
        />
      </div>
    </ChatContext.Provider>
  );
};

export default ContentPageLayout;
