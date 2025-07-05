
import Hero from "@/components/Hero";
import AIAdvisors from "@/components/AIAdvisors";
import StatsCounter from "@/components/StatsCounter";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <StatsCounter />
      <AIAdvisors />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
