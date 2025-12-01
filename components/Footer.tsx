import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { data } = useLanguage();
  const { ui } = data;
  const { nav, footer } = ui;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 md:-mt-20 md:-mr-20 pointer-events-none opacity-5 select-none">
        <span className="text-[10rem] md:text-[15rem] font-serif font-bold text-white leading-none">KF</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="inline-block group cursor-pointer"
            >
               <div className="flex flex-col">
                  <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-brand-lightGreen transition-colors duration-300">
                    KERLING FARM
                  </span>
                  <span className="text-[10px] md:text-xs text-brand-lightGreen tracking-[0.5em] uppercase mt-1 group-hover:tracking-[0.6em] transition-all duration-300">吉林园</span>
                </div>
            </Link>
            <p className="text-brand-sage text-sm leading-relaxed max-w-xs">
              {footer.desc}
            </p>
            <div className="flex space-x-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand-lightGreen/20">
                  <Facebook className="h-5 w-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand-lightGreen/20">
                  <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lightGreen hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand-lightGreen/20">
                  <Twitter className="h-5 w-5" />
               </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-serif text-lg font-bold mb-4 md:mb-6 text-white">{footer.explore}</h3>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><Link to="/" onClick={handleLogoClick} className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> {nav.home}</Link></li>
              <li><Link to="/accommodations" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> {nav.accommodations}</Link></li>
              <li><Link to="/activities" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> {nav.activities}</Link></li>
              <li><Link to="/contact" className="text-brand-sage hover:text-brand-lightGreen transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"/> {nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="font-serif text-lg font-bold mb-4 md:mb-6 text-white">{footer.visitUs}</h3>
            <ul className="space-y-4 md:space-y-5 text-sm text-brand-sage">
              <li className="flex items-start group cursor-default">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-brand-lightGreen mt-0.5 group-hover:animate-bounce" />
                <span className="leading-relaxed group-hover:text-white transition-colors">Lot 489, Jalan Kampung Air Panas,<br/>44100 Kerling, Selangor.</span>
              </li>
              <li className="flex items-center group cursor-default">
                <Phone className="h-5 w-5 mr-3 text-brand-lightGreen group-hover:rotate-12 transition-transform" />
                <span className="group-hover:text-white transition-colors">+60 1x-xxxxxxx</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-brand-lightGreen group-hover:scale-110 transition-transform" />
                <a href="mailto:enquiry@kerlingfarm.com" className="hover:text-white transition-colors border-b border-transparent hover:border-brand-lightGreen">enquiry@kerlingfarm.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sage/60">
          <p className="text-center md:text-left mb-4 md:mb-0">© {new Date().getFullYear()} Madmuse Art (M) Sdn. Bhd. All rights reserved.</p>
          <div className="flex space-x-6">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;