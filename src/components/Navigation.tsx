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
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-humanitarian rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-humanitarian-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PRCS</h1>
              <p className="text-xs text-muted-foreground">Pakistan Red Crescent</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/news" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Happening Now
            </Link>
            <Link to="/who-we-are" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Who We Are
            </Link>
            <Link to="/our-work" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Our Work
            </Link>
            <Link to="/get-involved" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Get Involved
            </Link>
            <Link to="/publications" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Publications
            </Link>
            <Link to="/e-shop" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              E-Shop
            </Link>
            <Link to="/contact" className="text-foreground hover:text-humanitarian transition-colors text-sm">
              Contact Us
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
                to="/news"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Happening Now
              </Link>
              <Link
                to="/who-we-are"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Who We Are
              </Link>
              <Link
                to="/our-work"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Our Work
              </Link>
              <Link
                to="/get-involved"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Get Involved
              </Link>
              <Link
                to="/publications"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Publications
              </Link>
              <Link
                to="/e-shop"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                E-Shop
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-foreground hover:text-humanitarian transition-colors"
                onClick={toggleMenu}
              >
                Contact Us
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