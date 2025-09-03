import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Eye } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Annual Report 2023",
      description: "Comprehensive overview of PRCS activities, achievements, and financial statements for the year 2023.",
      type: "Annual Report",
      date: "2024-01-01",
      pages: 68,
      language: "English/Urdu",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Emergency Response Guidelines",
      description: "Standard operating procedures for disaster response and emergency management protocols.",
      type: "Guidelines",
      date: "2023-12-15",
      pages: 45,
      language: "English/Urdu",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "First Aid Training Manual",
      description: "Complete guide for basic first aid procedures and emergency medical assistance techniques.",
      type: "Training Material",
      date: "2023-11-20",
      pages: 120,
      language: "Urdu",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Blood Donation Best Practices",
      description: "Comprehensive handbook for blood donation procedures and safety protocols.",
      type: "Handbook",
      date: "2023-10-10",
      pages: 32,
      language: "English/Urdu",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Volunteer Handbook 2023",
      description: "Essential guide for volunteers including code of conduct, procedures, and responsibilities.",
      type: "Handbook",
      date: "2023-09-05",
      pages: 56,
      language: "Urdu",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Community Health Newsletter",
      description: "Quarterly publication featuring health tips, awareness campaigns, and community stories.",
      type: "Newsletter",
      date: "2023-12-31",
      pages: 16,
      language: "English/Urdu",
      downloadUrl: "#"
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
              <span className="text-humanitarian">Publications</span> & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of reports, guidelines, training materials, and educational resources
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(pub.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{pub.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{pub.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {pub.pages} pages
                      </span>
                      <span>{pub.language}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-humanitarian hover:bg-humanitarian/90">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Publication Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Annual Reports", count: 5, description: "Yearly comprehensive reports" },
              { name: "Training Materials", count: 12, description: "Educational resources and guides" },
              { name: "Guidelines", count: 8, description: "Standard operating procedures" },
              { name: "Newsletters", count: 20, description: "Regular community updates" }
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-humanitarian mb-2">{category.count}</p>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
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

export default Publications;