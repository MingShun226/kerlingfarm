import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { data } = useLanguage();
  const { ui } = data;
  const { nav, footer } = ui;

  return (
    <footer className="bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 pointer-events-none opacity-5">
        <span className="text-[15rem] font-serif font-bold text-white leading-none">KF</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
               <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold tracking-wider text-white">
                    KERLING FARM
                  </span>
                  <span className="text-xs text-brand-lightGreen tracking-[0.5em] uppercase mt-1">古林园</span>
                </div>
            </Link>
            <p className="text-brand-sage text-sm leading-relaxed max-w-xs">
              {footer.desc}
            </p>
            <div className="flex space-x-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
               </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-serif text-lg font-bold mb-6 text-white">{footer.explore}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"/> {nav.home}</Link></li>
              <li><Link to="/accommodations" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"/> {nav.accommodations}</Link></li>
              <li><Link to="/activities" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"/> {nav.activities}</Link></li>
              <li><Link to="/contact" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"/> {nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="font-serif text-lg font-bold mb-6 text-white">{footer.visitUs}</h3>
            <ul className="space-y-5 text-sm text-brand-sage">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-brand-lightGreen mt-0.5" />
                <span className="leading-relaxed">Lot 489, Jalan Kampung Air Panas,<br/>44100 Kerling, Selangor.</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-lightGreen" />
                <span>+60 1x-xxxxxxx</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-lightGreen" />
                <span>enquiry@kerlingfarm.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sage/60">
          <p>© {new Date().getFullYear()} Madmuse Art (M) Sdn. Bhd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;