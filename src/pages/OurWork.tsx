import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Shield, HandHeart, Globe, Award, Zap, Target } from "lucide-react";

const OurWork = () => {
  const workAreas = [
    {
      icon: Shield,
      title: "Disaster Management & Emergency Response",
      description: "Rapid response to natural disasters, conflicts, and humanitarian crises across Pakistan.",
      impact: "2.5M+ people assisted in emergencies",
      progress: 85,
      projects: [
        "Flood Relief Operations 2023",
        "Earthquake Response Teams",
        "Emergency Shelter Programs",
        "Search & Rescue Operations"
      ]
    },
    {
      icon: Heart,
      title: "Health & Care Services",
      description: "Comprehensive healthcare services including blood banks, mobile health units, and medical assistance.",
      impact: "500K+ patients treated annually",
      progress: 78,
      projects: [
        "Blood Donation Campaigns",
        "Mobile Health Clinics",
        "Mother & Child Healthcare",
        "Disease Prevention Programs"
      ]
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering communities through education, capacity building, and sustainable development initiatives.",
      impact: "1000+ communities empowered",
      progress: 72,
      projects: [
        "Community Resilience Building",
        "Livelihood Support Programs",
        "Water & Sanitation Projects",
        "Educational Initiatives"
      ]
    },
    {
      icon: HandHeart,
      title: "Social Welfare & Protection",
      description: "Supporting vulnerable populations including orphans, elderly, and marginalized communities.",
      impact: "100K+ beneficiaries supported",
      progress: 68,
      projects: [
        "Orphan Support Programs",
        "Elderly Care Services",
        "Cash Transfer Programs",
        "Psychosocial Support"
      ]
    }
  ];

  const achievements = [
    { label: "Lives Saved", value: "2.5M+", icon: Heart },
    { label: "Volunteers Trained", value: "50K+", icon: Users },
    { label: "Emergency Responses", value: "1,200+", icon: Shield },
    { label: "Years of Service", value: "75+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-humanitarian/5 to-hope/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-humanitarian">Work</span> & Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how Pakistan Red Crescent Society transforms lives through humanitarian action, 
              emergency response, and community development across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-humanitarian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {achievements.map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-12 h-12 text-humanitarian-foreground mx-auto mb-4" />
                <div className="text-3xl font-bold text-humanitarian-foreground mb-2">{stat.value}</div>
                <p className="text-humanitarian-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Work Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on four key areas to maximize our humanitarian impact and serve communities effectively
            </p>
          </div>

          <div className="space-y-8">
            {workAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mr-4">
                          <area.icon className="w-6 h-6 text-humanitarian" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{area.title}</h3>
                          <Badge variant="secondary" className="mt-1">{area.impact}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{area.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Program Completion</span>
                          <span>{area.progress}%</span>
                        </div>
                        <Progress value={area.progress} className="h-2" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Key Projects & Initiatives</h4>
                      <div className="space-y-3">
                        {area.projects.map((project, idx) => (
                          <div key={idx} className="flex items-center">
                            <Target className="w-4 h-4 text-humanitarian mr-3 flex-shrink-0" />
                            <span className="text-sm">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-humanitarian mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Collaboration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working with international partners and the global Red Cross Red Crescent Movement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Zap className="w-6 h-6 text-humanitarian mr-2" />
                  Regional Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading disaster response coordination across South Asia and serving as a model for effective humanitarian action.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Users className="w-6 h-6 text-humanitarian mr-2" />
                  International Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborating with IFRC, ICRC, and sister National Societies to enhance global humanitarian capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-humanitarian mr-2" />
                  Recognition & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized internationally for excellence in humanitarian service and innovative approaches to community care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;