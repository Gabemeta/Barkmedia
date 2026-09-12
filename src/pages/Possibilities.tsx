import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Users, Briefcase, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bmaLogo from "@/assets/bma-logo.png";
import web3Partnership from "@/assets/web3-partnership.jpg";
import bmaHeadquarters from "@/assets/bma-headquarters.jpg";

const Possibilities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <img 
                src={bmaLogo} 
                alt="BMA Logo" 
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold gradient-text">Infinite Possibilities</h1>
                <p className="text-muted-foreground">The Future of Bark Media Africa</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* BMA Headquarters Section */}
          <section className="card-gradient rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">BMA Headquarters</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A state-of-the-art headquarters where trusted and tested community members work onsite to build the brand. 
              Our vision includes a professional workspace that embodies the spirit of African innovation and excellence.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src={bmaHeadquarters} 
                  alt="BMA Headquarters - Professional building with luxury vehicles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Professional headquarters with custom BMA-branded luxury vehicles
              </p>
            </div>
          </section>

          {/* Web3 Partnerships Section */}
          <section className="card-gradient rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">W3</div>
              <h2 className="text-3xl font-bold gradient-text">Future Web3 Partnerships</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strategic partnerships with leading Web3 companies to drive innovation across Africa. 
                  We're building bridges between traditional African communities and the decentralized future.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">DeFi Protocol Integrations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">NFT Marketplace Collaborations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Blockchain Education Programs</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-purple-200/40">
                <img 
                  src={web3Partnership} 
                  alt="BMA Web3 Partnership - Connecting Africans with Web3 Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Hiring Creative Africans Section */}
          <section className="card-gradient rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Hiring Creative Africans</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Skillful Builders</h3>
                <p className="text-muted-foreground">
                  Recruiting talented developers, designers, and creators who are passionate about building the future of African tech.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200/40">
                  <div className="text-2xl mb-2">👨‍💻</div>
                  <p className="text-sm text-green-700">Full-time Employees</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Tireless Grinders</h3>
                <p className="text-muted-foreground">
                  Community members who demonstrate exceptional dedication and results become part of the core BMA team.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200/40">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm text-blue-700">Community to Employee Pipeline</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Intern Program</h3>
                <p className="text-muted-foreground">
                  Comprehensive internship programs that provide real-world experience and mentorship opportunities.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200/40">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="text-sm text-purple-700">Learning & Growth</p>
                </div>
              </div>
            </div>
          </section>

          {/* Events & Meetups Section */}
          <section className="card-gradient rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold gradient-text">Future Events & Meetups</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building connections across Africa through strategic meetups and crypto events that bring together 
                the brightest minds in blockchain technology and African innovation.
              </p>
              
              {/* Featured Event - DDMOROCCO 2026 */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200/40">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800">DDMOROCCO 2026</h3>
                    <p className="text-amber-700">Premier DoginalDogs Event in Morocco</p>
                  </div>
                </div>
                <p className="text-amber-800 mb-4">
                  An exclusive gathering bringing together the African crypto community in the heart of Morocco. 
                  Network, learn, and shape the future of blockchain in Africa.
                </p>
                <div className="flex items-center gap-4 text-sm text-amber-700">
                  <span>📅 2026</span>
                  <span>🇲🇦 Morocco</span>
                  <span>🎯 DoginalDogs Community</span>
                </div>
              </div>

              {/* Future Events */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Future Events Across Africa</h4>
                <p className="text-muted-foreground">
                  We're actively considering hosting blockchain and crypto events in various African countries, 
                  bringing together innovators and communities across the continent to shape the future of African tech.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in building the future of African innovation. Every possibility starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://x.com/barkmediaafrica', '_blank')}
              >
                Join Our Community
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Possibilities;
