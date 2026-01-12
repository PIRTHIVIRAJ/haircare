import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MessageCircle, Sparkles } from "lucide-react";

interface HeroProps {
  onStartChat: () => void;
}

const Hero = ({ onStartChat }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Hair Assessment
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-[125px] text-balance animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
            Understand Your
            <br />
            <span className="text-gradient-animated" data-text="Hair Health">Hair Health</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Get personalized guidance on hair loss, thinning, and scalp concerns. 
            Our AI assistant helps you understand your symptoms and suggests practical next steps.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={onStartChat}
              className="group px-8 py-6 text-base rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-elevated"
            >
              Start Your Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: MessageCircle, text: "Conversational & Easy" },
              { icon: Shield, text: "Private & Confidential" },
              { icon: Sparkles, text: "Educational Guidance" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-3 p-4 glass rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
