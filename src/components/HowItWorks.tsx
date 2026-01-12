import { MessageSquare, Search, Lightbulb, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Concerns",
    description: "Tell us what you're noticing with your hair or scalp. No judgment, just a caring conversation."
  },
  {
    icon: Search,
    title: "Clarifying Questions",
    description: "We'll ask a few gentle questions to better understand your situation and symptoms."
  },
  {
    icon: Lightbulb,
    title: "Understand the Possibilities",
    description: "Receive clear explanations of common causes in simple, easy-to-understand language."
  },
  {
    icon: HeartHandshake,
    title: "Practical Guidance",
    description: "Get personalized suggestions and know when it might be helpful to see a specialist."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, supportive process designed to help you understand your hair health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border/50" />
              )}
              
              <div className="glass rounded-2xl p-8 shadow-soft hover:shadow-glass transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shadow-soft">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
