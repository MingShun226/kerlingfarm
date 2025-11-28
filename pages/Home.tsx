import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Wind, Sun, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const { data } = useLanguage();
  const { ui, farmInfo } = data;
  const { home } = ui;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // State for the interactive produce image
  const [activeProduceImage, setActiveProduceImage] = useState<string>('');
  
  // Set default image when data loads or changes
  useEffect(() => {
    if (farmInfo.produce.length > 0) {
      setActiveProduceImage(farmInfo.produce[0].image);
    }
  }, [farmInfo]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Helmet>
        <title>Home | Kerling Farm</title>
        <meta name="description" content="Welcome to Kerling Farm. Escape the city and experience authentic organic farm life, durian tasting, and peaceful nature stays." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full"
          >
            <img 
              src="https://picsum.photos/id/1043/1920/1080" 
              alt="Kerling Farm Landscape" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <span className="inline-block bg-brand-lightGreen/20 backdrop-blur-sm text-brand-lightGreen border border-brand-lightGreen/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase shadow-lg">
                {home.welcome}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-xl"
            >
              {home.heroTitle}
              <span className="block text-2xl sm:text-4xl md:text-5xl font-light italic mt-2 text-brand-sand/90 font-sans">{home.heroSubtitle}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4"
            >
              {home.heroDesc}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/accommodations" 
                className="group relative inline-flex items-center gap-3 bg-white text-brand-dark px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all duration-300 hover:bg-brand-lightGreen hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(118,176,65,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 text-sm md:text-base">
                  {home.bookBtn}
                  <span className="bg-brand-dark group-hover:bg-white text-white group-hover:text-brand-green rounded-full p-1 transition-all duration-300 group-hover:rotate-45">
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </span>
                </span>
                {/* Shimmer Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2 font-medium">Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 bg-brand-cream relative overflow-hidden">
        {/* Decorative elements */}
        <Leaf className="absolute top-20 left-10 text-brand-sage/20 h-32 w-32 md:h-64 md:w-64 -rotate-45 pointer-events-none" />
        <Wind className="absolute bottom-20 right-10 text-brand-sage/20 h-24 w-24 md:h-48 md:w-48 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4 md:mb-6"
            >
              {home.aboutTitle} <span className="text-brand-lightGreen">Kerling Farm</span>
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 w-16 md:w-24 bg-brand-lightGreen mx-auto mb-6 md:mb-8"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto px-2"
            >
              {home.aboutDesc}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {home.aboutFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <div className="w-12 h-1 bg-brand-lightGreen mb-3 md:mb-4 rounded-full group-hover:w-20 transition-all duration-300" />
                  <h3 className="font-serif font-bold text-xl md:text-3xl text-white mb-2 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-4 group-hover:translate-y-0">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produce Highlight - Interactive Collage */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left: Interactive Collage Image */}
            <motion.div 
              className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-brand-sand">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeProduceImage}
                    src={activeProduceImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    alt="Fresh Produce" 
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 z-20 bg-brand-cream p-4 md:p-6 rounded-full shadow-xl hidden sm:block border-4 border-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Sun className="w-8 h-8 md:w-12 md:h-12 text-brand-earth mb-1 mx-auto" />
                <span className="font-bold text-brand-dark text-[10px] md:text-xs uppercase tracking-widest block text-center">
                  100%<br/>Organic
                </span>
              </motion.div>

              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-lightGreen/10 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            {/* Right: Content */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightGreen/10 text-brand-lightGreen rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6">
                <Sprout className="w-4 h-4" />
                <span>Harvest to Table</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-4 md:mb-6 leading-tight">
                {home.freshTitle} <br/><span className="text-brand-lightGreen italic">{home.freshSubtitle}</span>
              </h2>
              
              <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                {home.freshDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {farmInfo.produce.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    onMouseEnter={() => setActiveProduceImage(item.image)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-4 py-2 md:px-5 md:py-3 text-sm md:text-base border rounded-xl font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 ${
                       activeProduceImage === item.image 
                       ? 'bg-brand-dark text-white border-brand-dark scale-105 shadow-xl ring-2 ring-offset-2 ring-brand-dark'
                       : 'bg-brand-cream border-brand-earth/10 text-brand-dark hover:bg-white'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-gray-100 flex items-center gap-6 md:gap-8">
                 <div>
                    <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-dark">60</span>
                    <span className="text-xs md:text-sm text-stone-500 uppercase tracking-wide">{home.stats.acres}</span>
                 </div>
                 <div className="h-10 w-px bg-gray-200"></div>
                 <div>
                    <span className="block text-3xl md:text-4xl font-serif font-bold text-brand-dark">100%</span>
                    <span className="text-xs md:text-sm text-stone-500 uppercase tracking-wide">{home.stats.organic}</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/id/1039/1920/1200" 
            alt="Farm Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 max-w-4xl mx-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.01]"
          >
            <span className="text-brand-lightGreen font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-4 block text-shadow-sm text-sm md:text-base">{home.ctaSubtitle}</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 md:mb-8 drop-shadow-lg leading-tight">
              {home.ctaTitle}
            </h2>
            <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed">
              {home.ctaDesc}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-brand-dark hover:bg-brand-lightGreen hover:text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            >
              <span className="relative z-10">{home.ctaBtn}</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* Ripple Effect Background */}
              <div className="absolute inset-0 bg-brand-lightGreen transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;