import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Package } from "lucide-react";
import { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "PRCS First Aid Kit - Premium",
      price: 2500,
      originalPrice: 3000,
      description: "Complete first aid kit with essential medical supplies for emergencies.",
      image: "/placeholder.svg",
      category: "First Aid",
      inStock: true,
      rating: 4.8,
      reviews: 125
    },
    {
      id: 2,
      name: "Emergency Blanket Set",
      price: 1200,
      description: "Thermal emergency blankets for disaster relief and camping.",
      image: "/placeholder.svg",
      category: "Emergency Supplies",
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "PRCS Official T-Shirt",
      price: 800,
      description: "Premium quality cotton t-shirt with PRCS logo and emblem.",
      image: "/placeholder.svg",
      category: "Apparel",
      inStock: true,
      rating: 4.7,
      reviews: 234
    },
    {
      id: 4,
      name: "Water Purification Tablets",
      price: 500,
      description: "Pack of 50 water purification tablets for emergency use.",
      image: "/placeholder.svg",
      category: "Emergency Supplies",
      inStock: false,
      rating: 4.9,
      reviews: 67
    },
    {
      id: 5,
      name: "PRCS Coffee Mug",
      price: 350,
      description: "Ceramic coffee mug with PRCS branding - perfect for donors.",
      image: "/placeholder.svg",
      category: "Merchandise",
      inStock: true,
      rating: 4.4,
      reviews: 156
    },
    {
      id: 6,
      name: "Emergency Radio",
      price: 1800,
      description: "Solar powered emergency radio with flashlight function.",
      image: "/placeholder.svg",
      category: "Emergency Supplies",
      inStock: true,
      rating: 4.5,
      reviews: 43
    }
  ];

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-humanitarian/5 to-hope/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              PRCS <span className="text-humanitarian">E-Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Support our mission while getting quality emergency supplies, training materials, and branded merchandise
            </p>
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="py-4 bg-humanitarian">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-humanitarian-foreground">
              <span className="flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                {cart.length} item(s) in cart
              </span>
              <Button variant="outline" className="text-humanitarian-foreground border-humanitarian-foreground">
                View Cart
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <div className="flex gap-2">
              {['All', 'First Aid', 'Emergency Supplies', 'Apparel', 'Merchandise'].map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-humanitarian hover:text-humanitarian-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-destructive">
                      Save ₨{product.originalPrice - product.price}
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                  </div>
                  <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-foreground">₨{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">₨{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-humanitarian hover:bg-humanitarian/90"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Shop by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "First Aid Kits", icon: "🏥", items: 15 },
              { name: "Emergency Supplies", icon: "🚨", items: 28 },
              { name: "Training Materials", icon: "📚", items: 12 },
              { name: "Merchandise", icon: "🎁", items: 22 }
            ].map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.items} products</p>
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

export default Shop;