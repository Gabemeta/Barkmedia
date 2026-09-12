import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bmaLogo from "@/assets/bma-logo.png";
import hoodieFront from "@/assets/hoodie-front.jpg";
import hoodieBack from "@/assets/hoodie-back.jpg";
import shirtFront from "@/assets/shirt-front.jpg";
import shirtBack from "@/assets/shirt-back.jpg";
import capFront from "@/assets/cap-front.jpg";
import phonePouches from "@/assets/phone-pouches.jpg";
import majorDogs from "@/assets/major-dogs.jpg";

const Merchandise = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "BMA Black Hoodie",
      description: "Premium black hoodie with BMA logo on chest and DoginalDogs design on back",
      images: [hoodieFront],
      price: "Price TBA"
    },
    {
      id: 2,
      name: "BMA Black Shirt",
      description: "Stylish black t-shirt with BMA logo on chest and DoginalDogs design on back",
      images: [shirtFront],
      price: "Price TBA"
    },
    {
      id: 3,
      name: "BMA Black Face Cap",
      description: "Classic black baseball cap with embroidered BMA logo on front",
      images: [capFront],
      price: "Price TBA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <img 
                src={bmaLogo} 
                alt="BMA Logo" 
                className="w-10 h-10 object-cover rounded-lg"
              />
              <h1 className="text-sm sm:text-base md:text-xl font-bold gradient-text">BMA Merchandise Store</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Exclusive BMA Collection
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wear your African crypto pride with our premium merchandise collection. 
            Each piece is designed to showcase your BMA membership and connect you with 
            the vibrant DoginalDogs community across Africa.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="text-foreground text-sm font-medium">Limited Edition Collection</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-gradient border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl gradient-text">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Product Images */}
                  <div className="flex justify-center">
                    <div className="relative overflow-hidden rounded-lg bg-muted/20 max-w-md">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground">Pricing coming soon</div>
                    </div>
                    <Button 
                      variant="outline" 
                      disabled
                      className="bg-white/5 border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">Coming Soon!</h3>
          <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
            Our merchandise store is launching soon with competitive pricing and worldwide shipping. 
            Follow us on social media to be the first to know when these exclusive items become available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://x.com/barkmediaafrica', '_blank')}
            >
              Follow for Updates
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              onClick={() => navigate('/')}
            >
              Back to Homepage
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merchandise;