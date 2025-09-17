import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";
import heroCarImage from "@/assets/hero-car2.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                Trusted by 50,000+ car owners
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
                Complete Car Health Check 
                <span className="text-primary"> in Minutes</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get comprehensive car diagnostics, instant reports, and premium car wash services. 
                All in one convenient mobile app.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">Instant Health Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-success" />
                <span className="font-medium">Quick 15-min Check</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-success" />
                <span className="font-medium">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">Premium Car Wash</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="hero" size="lg">
                Book Health Check
              </Button>
              <Button variant="outline" size="lg">
                View Wash Packages
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div>• 50,000+ satisfied customers</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroCarImage}
                alt="Professional car health check service"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" /> */}
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card border">
              <div className="text-2xl font-bold text-primary">15min</div>
              <div className="text-sm text-muted-foreground">Average check time</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-card border">
              <div className="text-2xl font-bold text-success">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;