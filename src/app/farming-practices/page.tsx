import Hero from "@/components/Hero";
import { CheckCircle2, Waves, Droplets, Wind, Sun } from "lucide-react";

const steps = [
  {
    title: "Water Quality Control",
    description: "Continuous monitoring of pH, oxygen levels, and temperature to ensure the perfect environment.",
    icon: <Droplets size={32} />,
  },
  {
    title: "Sustainable Feeding",
    description: "Using ethically sourced, nutrient-dense organic feed formulated for each specific species.",
    icon: <Sun size={32} />,
  },
  {
    title: "Natural Filtration",
    description: "Implementing bio-filtration systems that mimic natural ecosystems to keep water pure.",
    icon: <Waves size={32} />,
  },
  {
    title: "Ethical Harvesting",
    description: "Harvesting methods designed to minimize stress and maintain the highest product quality.",
    icon: <Wind size={32} />,
  },
];

export default function FarmingPracticesPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero 
        title="Sustainable FARMING Practices"
        subtitle="Innovation meets nature. Our farming methods are designed to be regenerative and environmentally harmonious."
      />

      {/* Main Philosophy */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-aqua-950 dark:text-white leading-tight">
              A Balance with the <span className="text-aqua-600">Environment</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At SUDU DUWA AQUA, we believe that the health of our products is directly linked to the health of the ecosystem. We don't just farm; we protect and nurture.
            </p>
            <ul className="space-y-4">
              {[
                "Zero antibiotic usage",
                "Rainwater harvesting systems",
                "Solar-powered aeration",
                "Biodiversity preservation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="text-accent-green" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full aspect-square bg-aqua-100 dark:bg-slate-800 rounded-[60px] overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-overlay" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-aqua-600 shadow-xl">
                    <Waves size={32} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-slate-50 dark:bg-slate-950 py-24">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-aqua-950 dark:text-white mb-6">Our 4-Step Process</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Meticulous attention to detail at every stage of the lifecycle ensures premium results.
          </p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group p-10 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-aqua-600/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-aqua-50 dark:bg-aqua-950/30 rounded-2xl flex items-center justify-center text-aqua-600 mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-aqua-950 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[50px] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500/20 blur-[120px] rounded-full" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Advanced Monitoring <br />Technology</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We utilize IoT sensors and AI-driven analytics to track every parameter of our farms in real-time, allowing for proactive adjustments and unmatched consistency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-1">Real-time Data</h4>
                  <p className="text-xs text-slate-500">Live oxygen & pH levels</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-1">AI Analytics</h4>
                  <p className="text-xs text-slate-500">Growth rate predictions</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
               <div className="h-2 bg-aqua-600/30 rounded-full overflow-hidden">
                 <div className="h-full bg-aqua-600 w-3/4 rounded-full" />
               </div>
               <div className="h-2 bg-aqua-600/30 rounded-full overflow-hidden">
                 <div className="h-full bg-aqua-600 w-1/2 rounded-full" />
               </div>
               <div className="h-2 bg-aqua-600/30 rounded-full overflow-hidden">
                 <div className="h-full bg-aqua-600 w-4/5 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
