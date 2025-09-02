import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      info: "1030",
      description: "24/7 Emergency assistance"
    },
    {
      icon: Phone,
      title: "General Inquiries",
      info: "+92-51-9250404",
      description: "Monday to Friday, 9 AM - 5 PM"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@prcs.org.pk",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      info: "National Headquarters, Sector H-8, Islamabad",
      description: "Pakistan"
    }
  ];

  const offices = [
    {
      city: "Karachi",
      address: "PRCS Sindh Branch, Karachi",
      phone: "+92-21-99201234",
      email: "karachi@prcs.org.pk"
    },
    {
      city: "Lahore", 
      address: "PRCS Punjab Branch, Lahore",
      phone: "+92-42-99123456",
      email: "lahore@prcs.org.pk"
    },
    {
      city: "Peshawar",
      address: "PRCS KPK Branch, Peshawar", 
      phone: "+92-91-5123456",
      email: "peshawar@prcs.org.pk"
    },
    {
      city: "Quetta",
      address: "PRCS Balochistan Branch, Quetta",
      phone: "+92-81-2123456", 
      email: "quetta@prcs.org.pk"
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
              Contact <span className="text-humanitarian">PRCS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for emergency assistance, inquiries about our services, 
              or to learn how you can get involved in our humanitarian mission.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-8 bg-humanitarian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <Heart className="w-6 h-6 text-humanitarian-foreground mr-3" />
            <div>
              <h3 className="text-lg font-bold text-humanitarian-foreground">Emergency Assistance</h3>
              <p className="text-humanitarian-foreground/90">
                For immediate emergency assistance, call our 24/7 hotline: <span className="font-bold">1030</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-humanitarian/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-6 h-6 text-humanitarian" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">{contact.info}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-humanitarian hover:bg-humanitarian/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Regional Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{office.city}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-humanitarian" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-humanitarian" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-humanitarian" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-humanitarian" />
                    <h4 className="text-lg font-semibold text-foreground">Office Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                    <p className="text-humanitarian font-medium mt-3">Emergency Hotline: Available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;