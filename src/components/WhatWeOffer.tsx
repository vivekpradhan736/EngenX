import { Check } from "lucide-react";
import img from "@/assets/weoffer.svg";

const WhatWeOffer = () => {
  const leftFeatures = [
    "Vehicle financial liability check",
    "Odometer check",
    "Vehicle valuation and registration details",
    "National view of the vehicle history",
    "ANCAP safety and emission ratings"
  ];

  const rightFeatures = [
    "Damages, stolen status and written of check",
    "PPSR Certificate",
    "Sales price and odometer reading comparison",
    "Previous sale information"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:px-12">
          <div>
            <h2 className="text-lg font-medium text-primary mb-6">
              What we Offer
            </h2>
            <h1 className="text-4xl lg:text-4xl font-bold text-secondary mb-12 leading-tight">
              We've provided Aussies with the most comprehensive report on the market for over 4 years
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative w-[30rem] h-[30rem]">
              <img
                src={img}
                alt="Professional car health check service"
                className="w-full h-full xl:pl-24"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;