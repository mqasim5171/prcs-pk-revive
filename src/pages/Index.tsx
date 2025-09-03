import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// PRCS Website - Pakistan Red Crescent Society

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <GetInvolved />
      {/* Latest News Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest News & Updates</h2>
            <p className="text-muted-foreground">Stay informed about our latest humanitarian activities and impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Emergency Response</Badge>
                <CardTitle className="line-clamp-2">PRCS Launches Emergency Relief Operations in Flood-Affected Areas</CardTitle>
                <CardDescription className="line-clamp-3">
                  Pakistan Red Crescent Society mobilizes resources to assist families affected by recent flooding in southern regions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">January 15, 2024</span>
                  <Link to="/news">
                    <Button variant="outline" size="sm">Read More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Health Services</Badge>
                <CardTitle className="line-clamp-2">Blood Donation Drive Saves Over 500 Lives This Month</CardTitle>
                <CardDescription className="line-clamp-3">
                  Community volunteers and medical teams work together in nationwide blood collection campaign.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">January 12, 2024</span>
                  <Link to="/news">
                    <Button variant="outline" size="sm">Read More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Training</Badge>
                <CardTitle className="line-clamp-2">First Aid Training Program Reaches Rural Communities</CardTitle>
                <CardDescription className="line-clamp-3">
                  Mobile training units bring life-saving skills to remote villages across Pakistan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">January 10, 2024</span>
                  <Link to="/news">
                    <Button variant="outline" size="sm">Read More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button className="bg-humanitarian hover:bg-humanitarian/90">
                View All News & Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
