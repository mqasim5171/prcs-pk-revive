import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/prcs-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pakistan Red Crescent Society volunteers helping communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-humanitarian/10 px-4 py-2 rounded-full border border-humanitarian/20">
              <Heart className="w-4 h-4 text-humanitarian" />
              <span className="text-sm font-medium text-humanitarian">Serving Humanity Since 1947</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building Resilient{" "}
            <span className="text-humanitarian">Communities</span>{" "}
            Through Humanitarian Action
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Pakistan Red Crescent Society empowers communities through first aid training, 
            disaster response, blood donation drives, and volunteer programs. Join us in 
            creating a more compassionate Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-humanitarian hover:bg-humanitarian/90 shadow-humanitarian text-lg px-8 py-3"
            >
              Become a Volunteer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-humanitarian text-humanitarian hover:bg-humanitarian hover:text-humanitarian-foreground text-lg px-8 py-3"
            >
              Learn First Aid
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-humanitarian" />
              </div>
              <div className="text-2xl font-bold text-foreground">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-hope" />
              </div>
              <div className="text-2xl font-bold text-foreground">2M+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-trust" />
              </div>
              <div className="text-2xl font-bold text-foreground">75+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;