import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { NationsSection } from "@/components/NationsSection";
import { CommunityBooksSection } from "@/components/CommunityBooksSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingParticles } from "@/components/FloatingParticles";
import { SiteFooter } from "@/components/SiteFooter";
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Seo
        title="Bark Media Africa - Premier African Crypto & Web3 Community | barkmediaafrica.com"
        description="Bark Media Africa (BMA) is the leading African crypto community connecting 6 nations and 250+ members. Expert Web3 onboarding, social media management, and monetization services across Africa."
        path="/"
      />
      <FloatingParticles />
      <HeroSection />
      <StorySection />
      <NationsSection />
      <CommunityBooksSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
