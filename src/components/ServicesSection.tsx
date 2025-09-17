import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Battery, 
  Car, 
  CheckCircle, 
  FileText, 
  Settings, 
  Shield, 
  Wrench 
} from "lucide-react";
import HowItWork from "@/assets/HowItWork.svg";

const ServicesSection = () => {
  const healthCheckFeatures = [
    {
      icon: Activity,
      title: "Engine Diagnostics",
      description: "Complete engine health analysis with real-time data"
    },
    {
      icon: Battery,
      title: "Battery Testing",
      description: "Battery capacity and charging system evaluation"
    },
    {
      icon: Settings,
      title: "System Checks",
      description: "Comprehensive electrical and mechanical systems review"
    },
    {
      icon: Shield,
      title: "Safety Inspection",
      description: "Brake, tire, and safety system analysis"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Complete Car Health Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From detailed diagnostics to premium car wash services, we've got your vehicle covered
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Car Health Check */}
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Professional Health Check</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive 50-point inspection with instant digital report
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {healthCheckFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <feature.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">Starting at ₹499</span>
                  <span className="text-sm text-muted-foreground">15-20 minutes</span>
                </div>
                <Button variant="default" className="w-full">
                  Book Health Check
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Digital Report */}
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-success" />
              </div>
              <div>
                <CardTitle className="text-2xl">Instant Digital Report</CardTitle>
                <CardDescription className="text-lg">
                  Detailed analysis with photos, recommendations, and repair priorities
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Detailed component analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Photo documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Maintenance recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Repair cost estimates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Future maintenance schedule</span>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <div className="text-center">
                  <span className="text-lg font-semibold text-success">Included with every check</span>
                </div>
                <Button variant="success" className="w-full">
                  View Sample Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it works quick steps */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Shorten And Aimplify Your Car History Report
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From distraction to satisfaction in a few moments
          </p>
        </div>
        <div >
          <img src={HowItWork} alt="" className=""/>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;