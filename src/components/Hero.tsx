"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, image }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-aqua-50/50 to-white dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aqua-400/20 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-aqua-100 dark:bg-aqua-900/50 text-aqua-600 dark:text-aqua-400 rounded-full">
            Sustainable Aquaculture
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-aqua-950 dark:text-white mb-8 leading-[1.1]">
            {title.split(" ").map((word, i) => (
              <span key={i} className={word.toLowerCase() === "aqua" ? "text-aqua-600" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={ctaLink}
                className="group flex items-center gap-2 bg-aqua-600 hover:bg-aqua-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-aqua-600/20 hover:-translate-y-1"
              >
                {ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 rounded-2xl font-bold text-lg text-aqua-950 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
