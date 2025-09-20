import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqImage from "@/assets/FAQs.png";

const FAQsSection = () => {
  const faqs = [
    {
      question: "How quickly do I get the results?",
      answer: "You'll receive your comprehensive car health report within 15 minutes of completing the check. Our advanced diagnostic system processes all data immediately and delivers a detailed PDF report to your email."
    },
    {
      question: "What exactly is the Car Health Check?",
      answer: "Our Car Health Check is a comprehensive 360-degree inspection that covers engine diagnostics, brake system analysis, fluid levels, tire condition, electrical systems, and safety features. It provides you with a complete overview of your vehicle's condition."
    },
    {
      question: "What kind of checks do you perform?",
      answer: "We perform over 50 different diagnostic checks including engine performance, transmission health, brake efficiency, suspension condition, battery status, fluid levels, tire wear patterns, lights functionality, and safety system diagnostics."
    },
    {
      question: "Why should I get regular vehicle health checks?",
      answer: "Regular health checks help prevent costly breakdowns, ensure your safety on the road, maintain your car's resale value, and can save you money by catching issues early. It's like a medical checkup for your car."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide a 30-day warranty on all our diagnostic services. If any issue we missed is discovered within 30 days, we'll re-inspect your vehicle free of charge and provide updated recommendations."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
              <span className="text-primary font-bold text-xl tracking-wide">
                FAQs
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 leading-tight">
                Your Questions, Answered
              </h2>
            </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={faqImage} 
                alt="Professional automotive technician with diagnostic equipment"
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right side - FAQs */}
          <div className="order-1 lg:order-2">

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;