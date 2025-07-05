
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your AI-Powered
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent block">
              Income Machine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            4K analytics dashboard + 24/7 AI advisors working around the clock to maximize your passive income streams
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-xl"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-slate-400 text-sm">
            <p>Join 50,000+ users earning passive income with AI</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default Hero;
