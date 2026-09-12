import { Button } from "@/components/ui/button";
import { Twitter, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/african-sunset-hero.jpg";
import bmaLogo from "@/assets/bma-logo-optimized.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <header 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in animate-float-slow">
          <span className="text-primary text-sm">🐕</span>
          <span className="text-foreground text-sm">African Community in DoginalDogs</span>
        </div>
        
        {/* Main Heading with Logo */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <div className="text-center">
            <span className="gradient-text block">Bark Media</span>
            <div className="flex items-baseline justify-center gap-2 md:gap-4">
              <span className="text-foreground">Africa</span>
              <img 
                src={bmaLogo} 
                alt="Bark Media Africa (BMA) Logo - Premier African Crypto Community" 
                className="w-[0.8em] h-[0.8em] object-contain rounded-lg bg-white/10 backdrop-blur-sm p-1 border border-white/20"
              />
            </div>
          </div>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
         African crypto and Web3 community uniting voices across Africa. From Lagos to Cairo, Cape Town to Nairobi - Bark Media Africa connects 250+ members in blockchain innovation.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://x.com/barkmediaafrica', '_blank')}
          >
            <Twitter className="mr-2 h-5 w-5" />
            Follow barkmediaafrica
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            onClick={() => window.open('https://www.doginaldogs.com', '_blank', 'noopener,noreferrer')}
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore Our Community
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 animate-fade-in">
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-6xl font-bold gradient-text mb-2 group-hover:animate-pulse">6</div>
            <div className="text-muted-foreground text-lg">African Nations in BMA</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-6xl font-bold gradient-text mb-2 group-hover:animate-pulse">250+</div>
            <div className="text-muted-foreground text-lg">Community Members</div>
          </div>
          <div className="text-center cursor-pointer group hover:scale-110 transition-transform duration-300" onClick={() => navigate('/possibilities')}>
            <div className="text-4xl md:text-6xl font-bold gradient-text mb-2 animate-float" style={{ animationDuration: '3s' }}>∞</div>
            <div className="text-muted-foreground text-lg group-hover:text-primary transition-colors">Possibilities</div>
          </div>
        </div>
      </div>
    </header>
  );
};