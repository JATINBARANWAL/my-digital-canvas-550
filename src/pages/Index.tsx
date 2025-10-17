import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorkShowcase />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
