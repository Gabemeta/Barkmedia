import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { NationsSection } from "@/components/NationsSection";
import { CommunityBooksSection } from "@/components/CommunityBooksSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <HeroSection />
      <StorySection />
      <NationsSection />
      <CommunityBooksSection />
      <ContactSection />
    </div>
  );
};

export default Index;
