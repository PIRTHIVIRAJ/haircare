import { AlertCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              About HairCare.ai
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted companion for understanding hair health
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-5">
                What We Help With
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Hair fall & shedding",
                  "Thinning hair",
                  "Receding hairline",
                  "Patchy hair loss",
                  "Dandruff & dry scalp",
                  "Itchy or oily scalp",
                  "Scalp redness or flakes",
                  "Hair breakage concerns",
                  "Lifestyle factors",
                  "When to see a specialist"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Important Note
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HairCare.ai provides educational information and general guidance. 
                    We are not doctors and do not provide medical diagnoses. 
                    For persistent concerns, sudden changes, or if you're experiencing distress, 
                    please consult a dermatologist or healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
