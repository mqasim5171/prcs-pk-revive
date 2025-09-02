import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Clock, Award, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    interest: "",
    experience: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      interest: "",
      experience: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const volunteering_opportunities = [
    {
      icon: Heart,
      title: "Blood Donation Volunteer",
      description: "Help organize blood donation camps and assist donors",
      commitment: "4-8 hours/month",
      requirements: "Age 18+, Good communication skills"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engage with communities for health awareness programs",
      commitment: "6-10 hours/month",
      requirements: "Local language skills, Community engagement experience"
    },
    {
      icon: Clock,
      title: "Emergency Response",
      description: "First aid and emergency response during disasters",
      commitment: "On-call basis",
      requirements: "First aid certification, Physical fitness"
    },
    {
      icon: Award,
      title: "Training Instructor",
      description: "Conduct first aid and disaster preparedness training",
      commitment: "8-12 hours/month",
      requirements: "Teaching experience, Certified in first aid"
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
              Become a <span className="text-humanitarian">Volunteer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community of dedicated volunteers and make a difference in the lives 
              of those who need it most. Every act of service creates a ripple of hope.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Volunteer with PRCS?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Volunteering with PRCS gives you the opportunity to serve humanity, 
              learn new skills, and be part of a global movement dedicated to helping others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-humanitarian/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-humanitarian" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Make an Impact</h3>
              <p className="text-muted-foreground">
                Directly contribute to saving lives and helping communities in need
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-hope" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Build Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded people and build lasting friendships
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-trust" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Develop Skills</h3>
              <p className="text-muted-foreground">
                Gain valuable skills in leadership, first aid, and emergency response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Volunteer Opportunities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {volunteering_opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mb-4">
                    <opportunity.icon className="w-6 h-6 text-humanitarian" />
                  </div>
                  <CardTitle className="text-xl font-bold">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Time Commitment:</span> {opportunity.commitment}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Requirements:</span> {opportunity.requirements}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Apply to Volunteer</h2>
            <p className="text-muted-foreground">
              Fill out the form below to start your journey as a PRCS volunteer
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blood-donation">Blood Donation</SelectItem>
                        <SelectItem value="community-outreach">Community Outreach</SelectItem>
                        <SelectItem value="emergency-response">Emergency Response</SelectItem>
                        <SelectItem value="training">Training & Education</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Previous Volunteer Experience</Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Experience</SelectItem>
                        <SelectItem value="some">Some Experience</SelectItem>
                        <SelectItem value="experienced">Experienced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Why do you want to volunteer with PRCS?</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your motivation..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-humanitarian hover:bg-humanitarian/90"
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;