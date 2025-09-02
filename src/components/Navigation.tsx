import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-humanitarian rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-humanitarian-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PRCS</h1>
              <p className="text-xs text-muted-foreground">Pakistan Red Crescent</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-foreground hover:text-humanitarian transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-humanitarian transition-colors">
              Services
            </Link>
            <Link to="/volunteer" className="text-foreground hover:text-humanitarian transition-colors">
              Volunteer
            </Link>
            <Link to="/contact" className="text-foreground hover:text-humanitarian transition-colors">
              Contact
            </Link>
            <Link to="/donate">
              <Button variant="default" className="bg-humanitarian hover:bg-humanitarian/90">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/volunteer"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Volunteer
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/donate">
                  <Button variant="default" className="w-full bg-humanitarian hover:bg-humanitarian/90">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;