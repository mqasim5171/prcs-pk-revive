import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Shield, Users, HandHeart, CreditCard, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationFor, setDonationFor] = useState("");

  const handleDonate = () => {
    const finalAmount = amount === "custom" ? customAmount : amount;
    if (!finalAmount || !donationFor) {
      toast({
        title: "Please complete the form",
        description: "Select an amount and donation purpose to continue.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your generosity!",
      description: "Redirecting to secure payment portal...",
    });
  };

  const predefinedAmounts = ["500", "1000", "2500", "5000", "10000", "custom"];
  
  const donationAreas = [
    {
      id: "emergency-relief",
      title: "Emergency Relief",
      description: "Immediate assistance during disasters and emergencies",
      icon: Shield
    },
    {
      id: "blood-services",
      title: "Blood Services",
      description: "Support blood donation camps and blood bank operations",
      icon: Heart
    },
    {
      id: "health-programs",
      title: "Health Programs",
      description: "Community health initiatives and medical assistance",
      icon: Users
    },
    {
      id: "general",
      title: "General Fund",
      description: "Support all PRCS humanitarian activities",
      icon: HandHeart
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
              Support Our <span className="text-humanitarian">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your donation helps us provide life-saving assistance to those in need. 
              Every contribution, no matter the size, makes a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-humanitarian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-humanitarian-foreground mb-2">₨500</div>
              <p className="text-humanitarian-foreground/90">Can provide first aid supplies for 10 people</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-humanitarian-foreground mb-2">₨2,000</div>
              <p className="text-humanitarian-foreground/90">Can support a family for a week during emergency</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-humanitarian-foreground mb-2">₨5,000</div>
              <p className="text-humanitarian-foreground/90">Can train 25 people in basic first aid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Make a Donation</h2>
            <p className="text-muted-foreground">
              Choose your donation amount and help us continue our humanitarian work
            </p>
          </div>

          <Card className="p-8">
            <div className="space-y-8">
              {/* Donation Type */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Donation Type</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-8">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time Donation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly Donation</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Amount (PKR)</Label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt ? "default" : "outline"}
                      onClick={() => setAmount(amt)}
                      className={amount === amt ? "bg-humanitarian hover:bg-humanitarian/90" : ""}
                    >
                      {amt === "custom" ? "Custom" : `₨${amt}`}
                    </Button>
                  ))}
                </div>
                
                {amount === "custom" && (
                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Enter Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount in PKR"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                )}
              </div>

              {/* Donation Areas */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Where should your donation go?</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {donationAreas.map((area) => (
                    <Card
                      key={area.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        donationFor === area.id ? "ring-2 ring-humanitarian bg-humanitarian/5" : ""
                      }`}
                      onClick={() => setDonationFor(area.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-humanitarian/10 rounded-full flex items-center justify-center">
                            <area.icon className="w-5 h-5 text-humanitarian" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{area.title}</h4>
                            <p className="text-sm text-muted-foreground">{area.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Donation Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleDonate}
                  className="bg-humanitarian hover:bg-humanitarian/90 text-lg px-12 py-3"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Secure payment processing. Your donation is tax-deductible.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Other Ways to Help
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-humanitarian mx-auto mb-4" />
                <CardTitle>Become a Volunteer</CardTitle>
                <CardDescription>
                  Join our community of volunteers and donate your time and skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-humanitarian mx-auto mb-4" />
                <CardTitle>Donate Blood</CardTitle>
                <CardDescription>
                  Give the gift of life by participating in our blood donation drives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Find a Drive
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-humanitarian mx-auto mb-4" />
                <CardTitle>Spread Awareness</CardTitle>
                <CardDescription>
                  Help us reach more people by sharing our mission with others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Share Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Bank Transfer Details
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>For Local Donations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><span className="font-medium">Account Title:</span> Pakistan Red Crescent Society</p>
                <p><span className="font-medium">Bank:</span> National Bank of Pakistan</p>
                <p><span className="font-medium">Account No:</span> 0123456789</p>
                <p><span className="font-medium">Branch Code:</span> 0001</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>For International Donations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><span className="font-medium">SWIFT Code:</span> NBPAPKKA</p>
                <p><span className="font-medium">IBAN:</span> PK36NBPA0123456789012345</p>
                <p><span className="font-medium">Bank Address:</span> I.I. Chundrigar Road, Karachi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
