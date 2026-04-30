"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Farming Practices", href: "/farming-practices" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-aqua-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-aqua-500 transition-colors">
              <Droplets size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-aqua-900 dark:text-white">
              SUDU DUWA <span className="text-aqua-600">AQUA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-aqua-600 ${
                  pathname === link.href
                    ? "text-aqua-600"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-aqua-600 hover:bg-aqua-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Inquiry
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-aqua-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-aqua-100 dark:border-aqua-900 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium ${
                    pathname === link.href
                      ? "text-aqua-600"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-aqua-600 text-white px-6 py-3 rounded-xl text-center font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Inquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
