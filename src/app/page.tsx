import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Globe } from "lucide-react";

const featuredProducts = [
  {
    name: "Fresh Water Prawns",
    category: "Premium Seafood",
    description: "Sustainably harvested prawns with superior taste and texture, raised in crystal clear waters.",
  },
  {
    name: "Organic Tilapia",
    category: "Fresh Catch",
    description: "Firm, mild-flavored tilapia raised with organic feed and no antibiotics.",
  },
  {
    name: "Aquatic Feed Mix",
    category: "Farming Supplies",
    description: "Scientifically formulated nutrient-rich feed for optimal growth and health of aquatic life.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <Hero 
        title="Pure Quality Sustainable AQUA Products"
        subtitle="Experience the finest aquatic products from the heart of Sri Lanka. We combine traditional wisdom with modern technology for a better tomorrow."
        ctaText="Explore Products"
        ctaLink="/products"
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-aqua-50 dark:bg-slate-900 border border-aqua-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-aqua-600 shadow-sm mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-aqua-950 dark:text-white mb-4">Certified Quality</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Our products meet the highest international standards for safety and quality assurance.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-aqua-50 dark:bg-slate-900 border border-aqua-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-accent-green shadow-sm mb-6">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-aqua-950 dark:text-white mb-4">Eco-Friendly</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              We use 100% sustainable farming practices that preserve the local ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-aqua-50 dark:bg-slate-900 border border-aqua-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-aqua-950 dark:text-white mb-4">Global Reach</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Supplying premium aquatic products to domestic and international markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-aqua-950 dark:text-white mb-6">
              Our Premium <span className="text-aqua-600">Selection</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Discover our range of carefully nurtured aquatic products, harvested at the peak of freshness.
            </p>
          </div>
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-aqua-600 font-bold hover:gap-3 transition-all"
          >
            View All Products <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>

      {/* Farming Practices Teaser */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-aqua-950 rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                How We <span className="text-aqua-400">Farm</span>
              </h2>
              <p className="text-aqua-100/80 text-lg mb-10 leading-relaxed">
                Our innovative approach to aquaculture ensures the highest quality products while protecting our planet's most precious resource—water.
              </p>
              <Link 
                href="/farming-practices"
                className="inline-flex items-center gap-2 bg-white text-aqua-950 px-8 py-4 rounded-2xl font-bold transition-transform hover:scale-105"
              >
                Learn Our Process
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="text-3xl font-bold text-aqua-400 block mb-2">100%</span>
                <span className="text-white/80 text-sm">Natural Feed</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="text-3xl font-bold text-aqua-400 block mb-2">0%</span>
                <span className="text-white/80 text-sm">Chemicals</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="text-3xl font-bold text-aqua-400 block mb-2">24/7</span>
                <span className="text-white/80 text-sm">Monitoring</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <span className="text-3xl font-bold text-aqua-400 block mb-2">Eco</span>
                <span className="text-white/80 text-sm">Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
