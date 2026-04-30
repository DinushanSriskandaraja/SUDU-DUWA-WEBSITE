import Link from "next/link";
import { Droplets, Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-aqua-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Droplets size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-aqua-900 dark:text-white uppercase">
                SUDU DUWA AQUA
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Leading the way in sustainable aquaculture, providing premium quality aquatic products with a focus on environmental harmony and ethical farming.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:text-aqua-600 transition-colors">
                <FacebookIcon size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:text-aqua-600 transition-colors">
                <InstagramIcon size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:text-aqua-600 transition-colors">
                <LinkedinIcon size={20} />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-aqua-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 text-sm transition-colors">Our Products</Link></li>
              <li><Link href="/farming-practices" className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 text-sm transition-colors">Farming Practices</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-aqua-600 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-aqua-900 dark:text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-aqua-600 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">
                  123 Aqua Valley Road, <br />Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-aqua-600 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-aqua-600 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">info@sududuwaaqua.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-aqua-900 dark:text-white font-bold mb-6">Inquiry</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Have questions about our products or practices?
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-aqua-600 hover:bg-aqua-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © {new Date().getFullYear()} SUDU DUWA AQUA PRODUCTS (PVT) LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 dark:text-slate-500 hover:text-aqua-600 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 dark:text-slate-500 hover:text-aqua-600 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
