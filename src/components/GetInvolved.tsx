import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Heart, BookOpen, DollarSign } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description: "Join our community of dedicated volunteers and make a direct impact in people's lives.",
      action: "Join Now",
      color: "humanitarian"
    },
    {
      icon: Heart,
      title: "Donate Blood",
      description: "Save lives by donating blood at our regular blood donation camps across Pakistan.",
      action: "Find a Camp",
      color: "trust"
    },
    {
      icon: BookOpen,
      title: "Get First Aid Training",
      description: "Learn essential life-saving skills that could help you save someone's life in an emergency.",
      action: "Enroll Today",
      color: "hope"
    },
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Support our humanitarian work with a financial contribution to help us reach more communities.",
      action: "Donate Now",
      color: "humanitarian"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Involved with PRCS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can support our mission and contribute to building a more compassionate Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="group hover:shadow-humanitarian transition-all duration-300 text-center">
              <CardHeader>
                <div className={`w-16 h-16 bg-${way.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <way.icon className={`w-8 h-8 text-${way.color}`} />
                </div>
                <CardTitle className="text-lg">{way.title}</CardTitle>
                <CardDescription className="text-sm">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className={`w-full border-${way.color} text-${way.color} hover:bg-${way.color} hover:text-${way.color}-foreground`}
                >
                  {way.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-humanitarian rounded-2xl p-8 md:p-12 text-center text-humanitarian-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of volunteers who are already making a positive impact in communities across Pakistan. 
            Your compassion and dedication can save lives and bring hope to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-humanitarian-foreground text-humanitarian hover:bg-humanitarian-foreground/90 px-8 py-3"
            >
              Start Volunteering Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-humanitarian-foreground text-humanitarian-foreground hover:bg-humanitarian-foreground hover:text-humanitarian px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;