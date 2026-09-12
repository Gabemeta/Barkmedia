import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import communityImage from "@/assets/community-gathering.webp";

const RevealCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isRevealed } = useScrollReveal(0.1);
  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export const StorySection = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal(0.2);
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal(0.1);

  return (
    <main className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">African Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a single hosting space to onboarding hundreds across Africa - Bark Media Africa has transformed countless lives through Web3 education and community building across the continent.
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mt-12 mb-8">
            WHAT WE DO BEST AS <span className="gradient-text">BMA CREW</span>
          </h3>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <RevealCard delay={0.1}>
            <article className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">CRYPTO ONBOARDING</h3>
              <p className="text-foreground/90 leading-relaxed">
                Bark Media Africa specializes in bringing Africans into the crypto and Web3 space with comprehensive guidance and support. From complete beginners to advanced users, we provide step-by-step onboarding processes, educational resources, and mentorship to ensure every African community member can confidently navigate the digital economy and blockchain technology.
              </p>
            </article>
          </RevealCard>

          <RevealCard delay={0.2}>
            <article className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">SOCIAL MEDIA MONETIZATION</h3>
              <p className="text-foreground/90 leading-relaxed">
                Bark Media Africa empowers African community members to turn their digital presence into sustainable income streams. Through strategic partnerships, exclusive opportunities, and proven monetization strategies, we help Africans leverage their social media accounts, content creation skills, and crypto knowledge across Nigeria, South Africa, Kenya, Ghana, Egypt, and Morocco.
              </p>
            </article>
          </RevealCard>

          <RevealCard delay={0.3}>
            <article className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">PROFESSIONAL X ACCOUNT MANAGEMENT</h3>
              <p className="text-foreground/90 leading-relaxed">
                Bark Media Africa connects crypto projects with skilled African community members who professionally manage X (Twitter) accounts. Our trained social media managers understand African crypto culture, engage authentically with audiences, and help grow online presence while you focus on building your blockchain projects and business across Africa.
              </p>
            </article>
          </RevealCard>

          <RevealCard delay={0.4}>
            <article className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">DRIVING AFRICAN BLOCKCHAIN INNOVATION</h3>
              <p className="text-foreground/90 leading-relaxed">
                Bark Media Africa members are not just participants - we're innovators, creators, and leaders building the future of blockchain technology across Africa. BMA bridges traditional African values with cutting-edge digital innovation, fostering Web3 adoption from Lagos to Cairo, Cape Town to Nairobi.
              </p>
            </article>
          </RevealCard>

          <RevealCard delay={0.5}>
            <article className="card-gradient p-8 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full lg:col-span-2 lg:max-w-2xl lg:mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">BARK MEDIA AFRICA MISSION</h3>
              <p className="text-foreground/90 leading-relaxed">
                To amplify African voices in the global crypto space, foster blockchain innovation across the continent, and build bridges between traditional African communities and the digital future. Bark Media Africa believes in the power of collective action and the strength that comes from our diverse African heritage in the Web3 ecosystem.
              </p>
            </article>
          </RevealCard>
        </div>

        {/* Community Image */}
        <div 
          ref={imageRef}
          className={`relative rounded-2xl overflow-hidden shadow-card scroll-reveal ${imageRevealed ? 'revealed' : ''}`}
        >
          <img 
            src={communityImage} 
            alt="Bark Media Africa community gathering - African crypto and Web3 leaders across Nigeria, Kenya, South Africa, Ghana, Egypt, and Morocco"
            className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-2xl font-bold text-white mb-2">African Crypto Community</div>
            <div className="text-lg text-white/90">Unity & Strength</div>
          </div>
        </div>
      </div>
    </main>
  );
};
