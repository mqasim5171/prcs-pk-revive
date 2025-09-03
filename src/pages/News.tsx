import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "PRCS Launches Emergency Relief Operations in Flood-Affected Areas",
      excerpt: "Pakistan Red Crescent Society mobilizes resources to assist families affected by recent flooding in southern regions.",
      date: "2024-01-15",
      category: "Emergency Response",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Blood Donation Drive Saves Over 500 Lives This Month",
      excerpt: "Community volunteers and medical teams work together in nationwide blood collection campaign.",
      date: "2024-01-12",
      category: "Health Services",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "First Aid Training Program Reaches Rural Communities",
      excerpt: "Mobile training units bring life-saving skills to remote villages across Pakistan.",
      date: "2024-01-10",
      category: "Education & Training",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "International Cooperation Summit on Disaster Management",
      excerpt: "PRCS participates in regional conference to enhance cross-border emergency response capabilities.",
      date: "2024-01-08",
      category: "International",
      image: "/placeholder.svg"
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
              Happening <span className="text-humanitarian">Now</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, activities, and humanitarian efforts from Pakistan Red Crescent Society
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Emergency Response</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      January 15, 2024
                    </div>
                  </div>
                  <CardTitle className="text-2xl">PRCS Launches Emergency Relief Operations in Flood-Affected Areas</CardTitle>
                  <CardDescription className="text-lg">
                    Pakistan Red Crescent Society has mobilized its emergency response teams and resources to provide immediate assistance to families affected by recent flooding in the southern regions. The operation includes distribution of food packages, clean water, and temporary shelter materials.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-humanitarian hover:bg-humanitarian/90">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar News */}
            <div className="space-y-6">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">News Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Emergency Response", count: 12, icon: "🚨" },
              { name: "Health Services", count: 8, icon: "🏥" },
              { name: "Education & Training", count: 15, icon: "📚" },
              { name: "International", count: 6, icon: "🌍" }
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;