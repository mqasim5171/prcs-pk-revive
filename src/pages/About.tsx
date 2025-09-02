import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-humanitarian/5 to-hope/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-humanitarian">PRCS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pakistan Red Crescent Society has been serving humanity since 1947, 
              providing humanitarian assistance and building resilient communities across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our History</h2>
              <p className="text-muted-foreground mb-6">
                Established in 1947, Pakistan Red Crescent Society is the largest 
                humanitarian organization in Pakistan. We are part of the International 
                Red Cross and Red Crescent Movement, working tirelessly to alleviate 
                human suffering and protect life and health.
              </p>
              <p className="text-muted-foreground">
                Over the decades, we have responded to countless disasters, provided 
                medical care, conducted blood donation drives, and trained millions 
                in first aid and disaster preparedness.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <Shield className="w-12 h-12 text-humanitarian mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">75+</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <Users className="w-12 h-12 text-hope mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">50K+</h3>
                <p className="text-muted-foreground">Volunteers</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <Heart className="w-12 h-12 text-trust mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">2M+</h3>
                <p className="text-muted-foreground">Lives Touched</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <Award className="w-12 h-12 text-humanitarian mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">100+</h3>
                <p className="text-muted-foreground">Districts Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-card rounded-lg border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To prevent and alleviate human suffering wherever it may be found, 
                to protect life and health, and to ensure respect for human dignity, 
                particularly in times of armed conflict and other emergencies.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every person has access to humanitarian protection 
                and assistance, and where communities are resilient and prepared 
                to respond to disasters and emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;