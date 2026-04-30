import Hero from "@/components/Hero";
import { Users, Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero 
        title="Our Story and MISSION"
        subtitle="SUDU DUWA AQUA PRODUCTS is built on a foundation of integrity, sustainability, and excellence in aquaculture."
      />

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-aqua-50 dark:bg-slate-900 p-12 rounded-[40px] border border-aqua-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-aqua-600 rounded-2xl flex items-center justify-center text-white mb-8">
              <Eye size={28} />
            </div>
            <h2 className="text-3xl font-bold text-aqua-950 dark:text-white mb-6">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              To be the global leader in sustainable aquaculture, setting the benchmark for quality and environmental responsibility in the aquatic products industry.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-slate-800 p-12 rounded-[40px] border border-slate-800 dark:border-slate-700">
            <div className="w-14 h-14 bg-accent-green rounded-2xl flex items-center justify-center text-white mb-8">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              To provide the highest quality aquatic products to our customers through innovative farming practices that respect nature and support local communities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="bg-aqua-600 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <span className="text-5xl font-bold text-white block">15+</span>
              <span className="text-aqua-100 font-medium">Years Experience</span>
            </div>
            <div className="space-y-2">
              <span className="text-5xl font-bold text-white block">50+</span>
              <span className="text-aqua-100 font-medium">Dedicated Staff</span>
            </div>
            <div className="space-y-2">
              <span className="text-5xl font-bold text-white block">100%</span>
              <span className="text-aqua-100 font-medium">Organic Feed</span>
            </div>
            <div className="space-y-2">
              <span className="text-5xl font-bold text-white block">20+</span>
              <span className="text-aqua-100 font-medium">Global Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-aqua-950 dark:text-white">Who We Are</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in the fertile lands of Sri Lanka, SUDU DUWA AQUA PRODUCTS (PVT) LTD has grown from a small family-owned pond to a state-of-the-art aquaculture facility. Our journey is driven by a passion for the water and its life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-aqua-100 dark:bg-aqua-900 rounded-xl flex items-center justify-center text-aqua-600">
                <Users size={24} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-aqua-950 dark:text-white">Community First</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  We empower local communities by providing fair employment and supporting local infrastructure projects.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 bg-aqua-100 dark:bg-aqua-900 rounded-xl flex items-center justify-center text-aqua-600">
                <Award size={24} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-aqua-950 dark:text-white">Award Winning</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Recognized multiple times for our excellence in export quality and sustainable agricultural innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
