import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { data } = useLanguage();
  const { ui } = data;
  const { contact } = ui;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cream"
    >
      <Helmet>
        <title>{contact.title} | Kerling Farm</title>
        <meta name="description" content="Get in touch with Kerling Farm for reservations and inquiries." />
      </Helmet>

      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
           <motion.h1 
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="text-5xl font-serif font-bold mb-4"
           >
             {contact.title}
           </motion.h1>
           <p className="text-xl text-brand-sage">{contact.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Info Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 h-full"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-10 font-serif">{contact.title}</h2>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-brand-cream p-4 rounded-2xl group-hover:bg-brand-lightGreen group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-brand-earth group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{contact.location}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Lot 489, Jalan Kampung Air Panas,<br />
                    Kampung Kandang Gate,<br />
                    44100 Kerling, Selangor.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-brand-cream p-4 rounded-2xl group-hover:bg-brand-lightGreen group-hover:text-white transition-colors duration-300">
                  <Clock className="h-6 w-6 text-brand-earth group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{contact.checkIn}</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-brand-sand/30 px-4 py-2 rounded-lg">
                        <span className="text-xs text-stone-500 uppercase tracking-wide block">Check-in</span>
                        <span className="font-bold text-brand-green">3:00 PM</span>
                     </div>
                     <div className="bg-brand-sand/30 px-4 py-2 rounded-lg">
                        <span className="text-xs text-stone-500 uppercase tracking-wide block">Check-out</span>
                        <span className="font-bold text-brand-green">12:00 PM</span>
                     </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="flex-shrink-0 bg-brand-cream p-4 rounded-2xl group-hover:bg-brand-lightGreen group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6 text-brand-earth group-hover:text-white" />
                 </div>
                 <div className="ml-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{contact.reservations}</h3>
                    <p className="text-stone-600 mb-2">
                       {contact.subtitle}
                    </p>
                    <a href="mailto:enquiry@kerlingfarm.com" className="inline-flex items-center text-brand-green font-bold hover:text-brand-lightGreen transition-colors">
                       enquiry@kerlingfarm.com <Send className="h-4 w-4 ml-2" />
                    </a>
                 </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h4 className="font-bold text-brand-dark mb-3 text-lg">⚠️ {contact.policy}</h4>
               <p className="text-stone-600 leading-relaxed">
                  {contact.policyText}
               </p>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl min-h-[500px] h-full relative border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.9!2d101.6!3d3.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzYnMDAuMCJOIDEwMcKwMzYnMDAuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Kerling Farm Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;