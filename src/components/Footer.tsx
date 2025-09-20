import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Car, 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Twitter 
} from "lucide-react";
// import logo from "@/assets/ENGENX_logo.png";
import logo from "@/assets/ForBlack.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Professional car health check service"
                className="w-28 h-14 object-cover"
              />
            </div>
            <p className="text-secondary-foreground/80 max-w-sm">
              Your trusted partner for comprehensive car health checks and premium car wash services. 
              Keeping your vehicle in perfect condition.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-smooth">Car Health Check</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Digital Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Basic Car Wash</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Standard Car Wash</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Premium Car Wash</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Complete Care Combo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Locations</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+91 9429 601 299</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@engenx.com</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Multiple locations nationwide</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-secondary-foreground/80">
                Get updates on special offers
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 EngenX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;