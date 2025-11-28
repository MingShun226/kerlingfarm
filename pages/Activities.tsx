import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Activities: React.FC = () => {
  const { data } = useLanguage();
  const { activities, ui } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-cream min-h-screen pb-20"
    >
      <Helmet>
        <title>{ui.nav.activities} | Kerling Farm</title>
        <meta name="description" content="Explore activities at Kerling Farm: Fishing, Karaoke, BBQ, Kids Playground and Event Halls." />
      </Helmet>

      {/* Parallax Header */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0">
           <img 
              src="https://picsum.photos/id/1018/1920/1080" 
              alt="Activities Header" 
              className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-brand-dark/50 mix-blend-multiply" />
         </div>
         <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-4"
         >
            <span className="block text-brand-lightGreen font-bold tracking-[0.3em] uppercase mb-4">Discover & Play</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">{ui.nav.activities}</h1>
            <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">
              Curated experiences for relaxation and adventure
            </p>
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 md:mt-32 mb-12">
        <div className="space-y-32">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              <div className="w-full lg:w-1/2 group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(47,82,51,0.2)]">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={activity.image} 
                    alt={activity.name} 
                    className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {activity.price && (
                    <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur text-brand-dark px-6 py-2 rounded-full font-bold shadow-lg border border-brand-lightGreen/20">
                      {activity.price}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2 text-brand-lightGreen mb-4 font-bold tracking-wider uppercase text-xs">
                     <Tag className="h-4 w-4" />
                     <span>Activity</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-serif leading-tight">{activity.name}</h2>
                  
                  <div className="flex items-center text-stone-500 mb-8 font-medium bg-brand-sand/30 inline-block px-4 py-2 rounded-lg">
                    <MapPin className="h-5 w-5 mr-2 text-brand-earth" />
                    {activity.location}
                  </div>
                  
                  <p className="text-xl text-stone-600 mb-8 leading-relaxed font-light">
                    {activity.description}
                  </p>
                  
                  {activity.note && (
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                      <p className="text-red-800 font-medium italic">
                         " {activity.note} "
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Activities;