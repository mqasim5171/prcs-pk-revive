import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-humanitarian rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-humanitarian-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pakistan Red Crescent Society</h3>
                <p className="text-sm text-background/70">Serving Humanity Since 1947</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Dedicated to alleviating human suffering, protecting life and health, 
              and upholding human dignity especially during emergencies.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Our Services</a></li>
              <li><a href="#volunteer" className="text-background/80 hover:text-background transition-colors">Volunteer</a></li>
              <li><a href="/blood-donation" className="text-background/80 hover:text-background transition-colors">Blood Donation</a></li>
              <li><a href="/first-aid" className="text-background/80 hover:text-background transition-colors">First Aid Training</a></li>
              <li><a href="/youth-programs" className="text-background/80 hover:text-background transition-colors">Youth Programs</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-humanitarian mt-0.5" />
                <div>
                  <p className="text-background/80 text-sm">
                    National Headquarters<br />
                    Sector H-8, Islamabad<br />
                    Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-humanitarian" />
                <p className="text-background/80">+92-51-9250404</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-humanitarian" />
                <p className="text-background/80">info@prcs.org.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Pakistan Red Crescent Society. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;