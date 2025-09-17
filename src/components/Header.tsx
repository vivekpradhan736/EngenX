import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ForWhite.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* <Car className="h-8 w-8 text-primary" /> */}
          {/* <span className="text-xl font-bold text-primary">EngenX</span> */}
          <img
                src={logo}
                alt="Professional car health check service"
                className="w-48 h-28 object-cover"
              />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-smooth">
            How It Works
          </a>
          <a href="#car-wash" className="text-sm font-medium hover:text-primary transition-smooth">
            Car Wash
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-smooth">
            Reviews
          </a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="#car-wash" className="text-sm font-medium hover:text-primary transition-smooth">
              Car Wash
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-smooth">
              Reviews
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 text-red-500">
                Sign In
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;