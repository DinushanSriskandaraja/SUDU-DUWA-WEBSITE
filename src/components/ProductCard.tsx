"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  image?: string;
}

export default function ProductCard({ name, category, description, image }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-aqua-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center text-aqua-200 dark:text-slate-700">
          <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-aqua-600 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-aqua-950 dark:text-white group-hover:text-aqua-600 transition-colors">
            {name}
          </h3>
          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-aqua-600 group-hover:text-white transition-all">
            <ArrowUpRight size={18} />
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
