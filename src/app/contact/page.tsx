import Hero from "@/components/Hero";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero 
        title="Get in TOUCH with Us"
        subtitle="Have questions about our products or want to discuss a partnership? We're here to help."
      />

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-aqua-950 dark:text-white">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Reach out to us through any of these channels or use the contact form.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-aqua-100 dark:bg-aqua-900 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-aqua-950 dark:text-white">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">+94 11 234 5678</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Mon-Fri, 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-aqua-100 dark:bg-aqua-900 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-aqua-950 dark:text-white">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">info@sududuwaaqua.com</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">sales@sududuwaaqua.com</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-aqua-100 dark:bg-aqua-900 rounded-xl flex items-center justify-center text-aqua-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-aqua-950 dark:text-white">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">123 Aqua Valley Road,</p>
                  <p className="text-slate-600 dark:text-slate-400">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-aqua-600/5 border border-slate-100 dark:border-slate-800">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-aqua-950 dark:text-white ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-aqua-950 dark:text-white ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-aqua-950 dark:text-white ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none appearance-none cursor-pointer">
                    <option>Product Inquiry</option>
                    <option>Bulk Order Request</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-aqua-950 dark:text-white ml-1">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-aqua-500 outline-none resize-none"
                  ></textarea>
                </div>
                <button className="flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-aqua-600 hover:bg-aqua-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-aqua-600/20 hover:-translate-y-1 active:scale-95">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="w-full h-[500px] bg-slate-200 dark:bg-slate-800 rounded-[50px] overflow-hidden relative border border-slate-100 dark:border-slate-800">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-50" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-2xl text-center border border-slate-100 dark:border-slate-800 max-w-xs animate-float">
                <div className="w-12 h-12 bg-aqua-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-aqua-950 dark:text-white mb-2">Our Headquarters</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">123 Aqua Valley Road, Colombo, Sri Lanka</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
