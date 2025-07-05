
import { useEffect, useState } from "react";
import { DollarSign, Users, TrendingUp, Zap } from "lucide-react";

const StatsCounter = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    users: 0,
    roi: 0,
    automation: 0
  });

  useEffect(() => {
    const targets = {
      revenue: 125000,
      users: 50000,
      roi: 347,
      automation: 99
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targets).forEach(key => {
          const target = targets[key as keyof typeof targets];
          const current = prev[key as keyof typeof prev];
          const step = target / steps;
          
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(current + step, target);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: DollarSign,
      value: `$${Math.floor(counters.revenue).toLocaleString()}`,
      label: "Revenue Generated",
      suffix: "+"
    },
    {
      icon: Users,
      value: `${Math.floor(counters.users).toLocaleString()}`,
      label: "Active Users",
      suffix: "+"
    },
    {
      icon: TrendingUp,
      value: `${Math.floor(counters.roi)}%`,
      label: "Average ROI",
      suffix: ""
    },
    {
      icon: Zap,
      value: `${Math.floor(counters.automation)}%`,
      label: "Automation Rate",
      suffix: ""
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
