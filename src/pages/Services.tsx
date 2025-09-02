import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, BookOpen, Truck, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Blood Donation",
      description: "Organizing blood donation camps and maintaining blood banks to save lives.",
      features: ["Mobile Blood Units", "Voluntary Blood Donors", "Emergency Blood Supply", "Safe Blood Screening"]
    },
    {
      icon: BookOpen,
      title: "First Aid Training",
      description: "Comprehensive first aid and CPR training programs for communities.",
      features: ["Basic First Aid", "CPR Certification", "Workplace Training", "Community Workshops"]
    },
    {
      icon: Truck,
      title: "Disaster Response",
      description: "Emergency response and relief operations during natural disasters.",
      features: ["Emergency Relief", "Rescue Operations", "Rehabilitation", "Disaster Preparedness"]
    },
    {
      icon: Users,
      title: "Community Health",
      description: "Health awareness programs and medical assistance for underserved communities.",
      features: ["Health Camps", "Vaccination Drives", "Maternal Health", "Health Education"]
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "24/7 emergency medical services and ambulance operations.",
      features: ["Ambulance Service", "Emergency Response", "Medical Transport", "Crisis Support"]
    },
    {
      icon: Phone,
      title: "Helpline Services",
      description: "Round-the-clock helpline for emergency assistance and information.",
      features: ["Emergency Hotline", "Information Service", "Crisis Counseling", "Referral Services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-humanitarian/5 to-hope/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-humanitarian">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pakistan Red Crescent Society provides comprehensive humanitarian services 
              to build resilient communities and save lives across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-humanitarian" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-humanitarian rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need Our Services?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for emergency assistance, training programs, or to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-humanitarian hover:bg-humanitarian/90">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              Emergency Hotline: 1030
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;