
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Target, Lightbulb } from "lucide-react";

const AIAdvisors = () => {
  const advisors = [
    {
      name: "Dr. Ava Ryder",
      title: "Profit Automation Scientist",
      avatar: "/placeholder.svg",
      fallback: "AR",
      icon: Brain,
      specialty: "AI Strategy",
      description: "Specializes in profit optimization algorithms and automated revenue streams",
      status: "Active",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Marcus Chen",
      title: "Market Intelligence AI",
      avatar: "/placeholder.svg",
      fallback: "MC",
      icon: BarChart3,
      specialty: "Market Analysis",
      description: "Analyzes market trends and identifies high-ROI opportunities 24/7",
      status: "Active",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Sophia Neural",
      title: "Investment Strategist",
      avatar: "/placeholder.svg",
      fallback: "SN",
      icon: Target,
      specialty: "Portfolio Optimization",
      description: "Manages and optimizes investment portfolios using advanced AI models",
      status: "Active",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Alex Quantum",
      title: "Innovation Advisor",
      avatar: "/placeholder.svg",
      fallback: "AQ",
      icon: Lightbulb,
      specialty: "Growth Hacking",
      description: "Discovers new income streams and scales existing opportunities",
      status: "Active",
      bgGradient: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your AI Advisory Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Four specialized AI advisors working 24/7 to maximize your passive income potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${advisor.bgGradient} p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="h-20 w-20 mx-auto border-4 border-white/20">
                      <AvatarImage src={advisor.avatar} />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-slate-700 to-slate-800 text-white">
                        {advisor.fallback}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{advisor.title}</p>
                  
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 mb-4">
                    <advisor.icon className="h-3 w-3 mr-1" />
                    {advisor.specialty}
                  </Badge>
                </div>

                <p className="text-slate-400 text-sm text-center mb-4">
                  {advisor.description}
                </p>

                <div className="flex items-center justify-center">
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    {advisor.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisors;
