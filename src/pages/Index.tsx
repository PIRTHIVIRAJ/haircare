import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KnowledgeBase from "@/components/KnowledgeBase";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingChatBar from "@/components/FloatingChatBar";
import FullscreenChat from "@/components/FullscreenChat";
import type { ChatActivationSource } from "@/types/chat";

export type { ChatActivationSource };

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activationSource, setActivationSource] = useState<ChatActivationSource>(null);
  
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onStartChat={() => handleOpenChat('expanded')} />
        <HowItWorks />
        <KnowledgeBase />
        <About />
      </main>
      <Footer />
      <FloatingChatBar 
        onOpenChat={handleOpenChat} 
        isChatOpen={isChatOpen}
        activationSource={activationSource}
        chatInput={chatInput}
        onChatInputChange={setChatInput}
        onChatSubmit={handleChatSubmit}
      />
      <FullscreenChat 
        isOpen={isChatOpen} 
        onClose={handleCloseChat}
        activationSource={activationSource}
        chatInput={chatInput}
        onChatInputChange={setChatInput}
        submitTrigger={chatSubmitTrigger}
      />
    </div>
  );
};

export default Index;
