import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

const products = [
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
    name: "Ornamental Fish",
    category: "Exotic",
    description: "Vibrant and healthy ornamental fish for collectors and retailers worldwide.",
  },
  {
    name: "Aquatic Feed Mix",
    category: "Farming Supplies",
    description: "Scientifically formulated nutrient-rich feed for optimal growth and health of aquatic life.",
  },
  {
    name: "Water Treatment Kit",
    category: "Maintenance",
    description: "Essential tools and solutions for maintaining perfect water quality in aquaculture systems.",
  },
  {
    name: "Fry & Fingerlings",
    category: "Seed Stock",
    description: "High-yield, healthy fingerlings for start-up and established fish farms.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero 
        title="Our Premium AQUA Products"
        subtitle="From fresh catch to farming essentials, we provide everything you need for excellence in aquaculture."
      />

      <section className="container mx-auto px-4 md:px-6">
        {/* Filters bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-6 bg-white dark:bg-slate-900 rounded-[30px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-sm font-medium text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <Filter size={18} />
              Filter By
            </div>
            <select className="flex-grow md:w-48 px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 transition-all outline-none appearance-none cursor-pointer">
              <option>All Categories</option>
              <option>Premium Seafood</option>
              <option>Fresh Catch</option>
              <option>Farming Supplies</option>
              <option>Maintenance</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
            Load More Products
          </button>
        </div>
      </section>
      
      {/* Inquiry CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-aqua-50 dark:bg-slate-900/50 rounded-[40px] p-12 text-center border border-aqua-100 dark:border-slate-800">
          <h3 className="text-3xl font-bold text-aqua-950 dark:text-white mb-6">Need a custom order?</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            We provide bulk supplies and customized aquatic solutions for commercial enterprises. Get in touch with our sales team for a specialized quote.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-aqua-600 hover:bg-aqua-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-aqua-600/20 transition-all hover:-translate-y-1"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
