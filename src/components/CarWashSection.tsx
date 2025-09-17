import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Crown, 
  Droplets, 
  Shield, 
  Sparkles, 
  Star 
} from "lucide-react";

const CarWashSection = () => {
  const washPackages = [
    {
      name: "Basic Wash",
      price: "₹399",
      duration: "60 min",
      description: "Essential exterior cleaning for everyday maintenance",
      icon: Droplets,
      features: [
        "Exterior rinse and soap",
        "Hand drying",
        "Tire cleaning",
        "Basic interior vacuum"
      ],
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Standard Wash",
      price: "₹799",
      duration: "90 min", 
      description: "Comprehensive cleaning inside and out",
      icon: Sparkles,
      features: [
        "Everything in Basic",
        "Interior deep clean",
        "Dashboard polish",
        "Window cleaning (inside & out)",
        "Tire shine",
        "Air freshener"
      ],
      popular: true,
      variant: "default" as const
    },
    {
      name: "Premium Wash",
      price: "₹2499",
      duration: "180 min",
      description: "Luxury detailing service for the ultimate clean",
      icon: Crown,
      features: [
        "Everything in Standard",
        "Hand wax application",
        "Leather conditioning",
        "Engine bay cleaning",
        "Undercarriage wash",
        "Premium air freshener",
        "Rain-X treatment"
      ],
      popular: false,
      variant: "accent" as const
    }
  ];

  return (
    <section id="car-wash" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Premium Car Wash Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Add a professional car wash to your health check appointment. 
            Choose from three service levels to meet your needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {washPackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card border-0 ${
                pkg.popular ? 'ring-2 ring-primary shadow-hero' : ''
              } bg-gradient-card hover:shadow-hero transition-smooth`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {pkg.description}
                  </CardDescription>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant={pkg.variant} className="w-full">
                  {pkg.popular ? 'Choose Standard' : `Choose ${pkg.name.split(' ')[0]}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combo offer */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Complete Care Combo</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a health check with any car wash service and save 20%. 
            Keep your car running great and looking fantastic!
          </p>
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <span className="text-muted-foreground line-through">$94</span>
            <span className="text-primary">$75</span>
            <Badge variant="secondary">Save $19</Badge>
          </div>
          <Button variant="hero" size="lg" className="mt-6">
            Book Complete Care Combo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarWashSection;