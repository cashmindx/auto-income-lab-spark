
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-400 mb-8">
              "This platform generated $12,000 in passive income in my first month!" - Sarah M.
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent block">
              AI Income Journey?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already building multiple passive income streams with AI automation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">30-Day</div>
              <div className="text-slate-400">Money-Back Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-400">Customer Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400 mb-2">No Setup</div>
              <div className="text-slate-400">Fees or Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
