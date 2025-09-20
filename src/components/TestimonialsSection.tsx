import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "EngenX saved me hundreds of dollars by catching a small issue before it became major. The health check was quick and the report was incredibly detailed."
    },
    {
      name: "Mike Chen",
      role: "Family Dad",
      avatar: "/placeholder.svg", 
      rating: 5,
      text: "Love the convenience! Booked online, got my car checked and washed in under 30 minutes. The app makes everything so easy to track."
    },
    {
      name: "Emma Davis",
      role: "College Student",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "As a student, I needed affordable car care. The basic package is perfect for my budget and the technicians always explain everything clearly."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EngenX 
            for their vehicle maintenance needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card border-0 bg-gradient-card hover:shadow-hero transition-smooth">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50,000+</div>
            <div className="text-sm text-muted-foreground">Cars Inspected</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15min</div>
            <div className="text-sm text-muted-foreground">Average Wait Time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;