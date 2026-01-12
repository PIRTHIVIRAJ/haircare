import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatContext } from "@/contexts/ChatContext";

interface ChatCTAProps {
  title?: string;
  description?: string;
}

const ChatCTA = ({ 
  title = "Not sure what's causing your symptoms?",
  description = "Ask HairCare.ai for a personalised assessment based on your specific situation."
}: ChatCTAProps) => {
  const chatContext = useChatContext();

  const handleClick = () => {
    if (chatContext) {
      chatContext.openChat();
    }
  };

  // If we have a chat context (inside ContentPageLayout), use button to open chat
  // Otherwise, fall back to linking to home page
  return (
    <section className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/50 to-accent/5 border border-border">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-8 h-8 text-primary" />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        
        {chatContext ? (
          <Button 
            onClick={handleClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto flex-shrink-0"
          >
            Start Chat
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Link to="/#chat" className="flex-shrink-0">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto">
              Start Chat
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ChatCTA;
