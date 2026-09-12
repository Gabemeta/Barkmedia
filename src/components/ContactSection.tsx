import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, ShoppingBag, Mail, Users, Mic } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the <span className="gradient-text">Movement?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with us across multiple platforms and become part of Africa's most vibrant crypto community.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">HIRE INTERN TO HANDLE YOUR ACCOUNT</h3>
            <p className="text-muted-foreground mb-6">
              Get active and trusted community members to help you handle your account, keep it active and get it monetized
            </p>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => window.open('https://t.me/TenguX', '_blank')}
            >
              Hire Now
            </Button>
          </Card>

          <Card className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Our Merchandise</h3>
            <p className="text-muted-foreground mb-6">
              Show your BMA pride with our exclusive collection of hoodies, vests, caps, and accessories designed for the African crypto community
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/merchandise">Check-out our Merchandise</Link>
            </Button>
          </Card>

          <Card className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">BMA SPACE HOSTS</h3>
            <p className="text-muted-foreground mb-6">
              Meet our amazing space hosts and join their conversations about Web3, crypto, and building the future together.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/space-hosts">View Space Hosts</Link>
            </Button>
          </Card>

          <Card className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Contact us via Email</h3>
            <p className="text-muted-foreground mb-6">
              Reach out to us directly for partnerships, collaborations, or any inquiries about BMA and our services.
            </p>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => window.open('mailto:Tengubma@yahoo.com', '_blank')}
            >
              Email us here
            </Button>
          </Card>

          <Card className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Don't see your country? Join us!</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking to expand our pan-African community. Be the first from your nation to join BMA.
              🌍🤝🚀
            </p>
            <Button 
              variant="glow" 
              className="w-full"
              onClick={() => window.open('https://x.com/barkmediaafrica', '_blank')}
            >
              Join Community
            </Button>
          </Card>
        </div>

        {/* Footer Message */}
        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            "Together, we're not just participating in the future - we're building it."
          </p>
          <div className="flex justify-center gap-4 text-2xl">
            <span>🌍</span>
            <span>💎</span>
            <span>🚀</span>
            <span>🤝</span>
            <span>⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};