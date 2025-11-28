import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Users, Bed } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const Accommodations: React.FC = () => {
  const { data } = useLanguage();
  const { accommodations, ui } = data;
  const { nav } = ui;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-cream min-h-screen pb-20"
    >
      <Helmet>
        <title>{nav.accommodations} | Kerling Farm</title>
        <meta name="description" content="Choose from our variety of stays including Chai Chamber suites, Ant Chamber rooms, and scenic campsites." />
      </Helmet>

      {/* Header */}
      <div className="relative bg-brand-dark py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://picsum.photos/id/1029/1920/600" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            {nav.accommodations}
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-sage max-w-2xl mx-auto"
          >
            From modern suites nestled in nature to outdoor camping adventures under the stars.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* Notice Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-xl p-6 mb-16 border-l-4 border-brand-lightGreen flex items-start md:items-center gap-4"
        >
          <div className="bg-brand-lightGreen/10 p-3 rounded-full shrink-0">
            <Info className="h-6 w-6 text-brand-lightGreen" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-brand-dark">Important Booking Notice</h3>
            <p className="text-stone-600 mt-1">
              {ui.contact.policyText}
            </p>
          </div>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {accommodations.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="h-72 sm:h-80 overflow-hidden relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wider shadow-md">
                  {room.type}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl font-serif font-bold leading-tight">{room.name}</h2>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-stone-600 mb-8 leading-relaxed text-lg">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-sm font-medium text-stone-500">
                      <Check className="h-4 w-4 text-brand-lightGreen mr-2 shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>

                {room.note && (
                   <div className="bg-red-50 text-red-800 text-xs px-3 py-2 rounded-lg mb-6 inline-block self-start border border-red-100">
                     * {room.note}
                   </div>
                )}

                <div className="border-t border-stone-100 pt-6 mt-auto flex items-end justify-between">
                   <div className="flex flex-col gap-1">
                      <div className="flex items-center text-stone-500 text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        {room.capacity}
                      </div>
                   </div>
                   
                   <div className="text-right">
                      <p className="text-sm text-stone-400 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-brand-green font-serif">{room.priceWeekend}</p>
                      {room.priceWeekday && (
                        <p className="text-xs text-stone-400 font-medium">{room.priceWeekday}</p>
                      )}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Accommodations;