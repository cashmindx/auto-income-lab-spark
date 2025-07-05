
import { Shield, Zap, BarChart3, Globe, Clock, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "4K Analytics Dashboard",
      description: "Ultra-high resolution data visualization with real-time insights into all your income streams"
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Set up passive income streams in minutes with our one-click automation system"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your financial data is protected with military-grade encryption and security protocols"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access income opportunities from markets worldwide, 24/7 monitoring and execution"
    },
    {
      icon: Clock,
      title: "24/7 AI Monitoring",
      description: "Never miss an opportunity with continuous market scanning and automated responses"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Join thousands of users already earning consistent passive income with our platform"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features That Work
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to build and scale multiple passive income streams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
