import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Users, Award } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Shield,
      title: "Humanity",
      description: "We work to prevent and alleviate human suffering wherever it may be found"
    },
    {
      icon: Globe,
      title: "Impartiality",
      description: "We provide assistance based on need alone, without discrimination"
    },
    {
      icon: Users,
      title: "Neutrality",
      description: "We maintain neutrality to continue to enjoy the confidence of all"
    },
    {
      icon: Award,
      title: "Independence",
      description: "We maintain our autonomy so that we may always act in accordance with our principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Pakistan Red Crescent Society
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established in 1947, Pakistan Red Crescent Society (PRCS) is the largest 
              humanitarian organization in Pakistan, working tirelessly to serve humanity 
              in times of peace and conflict.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As an auxiliary to public authorities in humanitarian services, we are part of 
              the International Red Cross and Red Crescent Movement, adhering to the fundamental 
              principles that guide our work across the nation.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-humanitarian/5 border-l-4 border-humanitarian p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide relief in human suffering, protect life and health, and uphold 
                human dignity especially during emergencies, while promoting mutual understanding, 
                friendship, cooperation and lasting peace among all peoples.
              </p>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-6 h-6 text-humanitarian" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-humanitarian mb-2">75+</h3>
            <p className="text-muted-foreground">Years of Service</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-hope mb-2">50,000+</h3>
            <p className="text-muted-foreground">Active Volunteers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-trust mb-2">2M+</h3>
            <p className="text-muted-foreground">Lives Impacted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-humanitarian mb-2">150+</h3>
            <p className="text-muted-foreground">Districts Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;