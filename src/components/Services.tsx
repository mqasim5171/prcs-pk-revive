import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Shield, Droplets, HandHeart } from "lucide-react";
import firstAidImage from "@/assets/first-aid-training.jpg";
import bloodDonationImage from "@/assets/blood-donation.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "First Aid Training",
      description: "Learn vital life-saving skills with our certified first aid training programs for individuals and communities.",
      image: firstAidImage,
      color: "humanitarian"
    },
    {
      icon: Droplets,
      title: "Blood Donation Drives",
      description: "Regular blood collection camps to ensure adequate blood supply for emergency medical situations.",
      image: bloodDonationImage,
      color: "trust"
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Empowering young people through volunteer programs and leadership development initiatives.",
      image: volunteersImage,
      color: "hope"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Disaster Response",
      description: "Rapid emergency response and relief operations during natural disasters and emergencies."
    },
    {
      icon: HandHeart,
      title: "Community Health",
      description: "Health education programs and medical support for underserved communities."
    },
    {
      icon: Heart,
      title: "Humanitarian Aid",
      description: "Providing essential support to vulnerable populations across Pakistan."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive humanitarian services designed to build stronger, more resilient communities across Pakistan
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-trust transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 bg-${service.color}/10 rounded-full flex items-center justify-center`}>
                    <service.icon className={`w-5 h-5 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-humanitarian group-hover:text-humanitarian-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-humanitarian/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-humanitarian" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;