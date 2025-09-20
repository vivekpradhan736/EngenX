import { Shield, Users, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CommitmentSection = () => {
  const commitments = [
    {
      icon: Shield,
      title: "Information You Can Trust",
      description: "Our writers and editors exclusively use reputable, data-driven sources such as"
    },
    {
      icon: Users,
      title: "Real Owner Reviews",
      description: "Hundreds of thousands of reviews from verified vehicle owners help you better"
    },
    {
      icon: FileText,
      title: "Comprehensive and Informative",
      description: "Our team researches and road tests hundreds of vehicles each year."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Our Committed To You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vehicle History's team of automotive experts brings you the most accurate and 
            up-to-date used Car information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <Card 
                key={index} 
                className="text-center group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;