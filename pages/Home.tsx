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
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="bg-brand-lightGreen/20 backdrop-blur-sm text-brand-lightGreen border border-brand-lightGreen/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase">
                {home.welcome}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
            >
              {home.heroTitle}
              <span className="block text-3xl md:text-5xl font-light italic mt-2 text-brand-sand/90 font-sans">{home.heroSubtitle}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
            >
              {home.heroDesc}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/accommodations" 
                className="group relative inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-brand-lightGreen hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(118,176,65,0.6)]"
              >
                {home.bookBtn}
                <span className="bg-brand-dark group-hover:bg-white text-white group-hover:text-brand-green rounded-full p-1 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-5 w-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-24 px-4 bg-brand-cream relative overflow-hidden">
        {/* Decorative elements */}
        <Leaf className="absolute top-20 left-10 text-brand-sage/20 h-64 w-64 -rotate-45" />
        <Wind className="absolute bottom-20 right-10 text-brand-sage/20 h-48 w-48" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6"
            >
              {home.aboutTitle} <span className="text-brand-lightGreen">Kerling Farm</span>
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 w-24 bg-brand-lightGreen mx-auto mb-8"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto"
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
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-1 bg-brand-lightGreen mb-4 rounded-full" />
                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produce Highlight - Interactive Collage */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Interactive Collage Image */}
            <motion.div 
              className="lg:w-1/2 relative h-[500px] w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-brand-sand">
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
                className="absolute -bottom-10 -right-10 z-20 bg-brand-cream p-6 rounded-full shadow-xl hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Sun className="w-12 h-12 text-brand-earth mb-1" />
                <span className="font-bold text-brand-dark text-xs uppercase tracking-widest block text-center">
                  100%<br/>Organic
                </span>
              </motion.div>

              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-lightGreen/10 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            {/* Right: Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightGreen/10 text-brand-lightGreen rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                <Sprout className="w-4 h-4" />
                <span>Harvest to Table</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                {home.freshTitle} <br/><span className="text-brand-lightGreen italic">{home.freshSubtitle}</span>
              </h2>
              
              <p className="text-stone-600 text-lg leading-relaxed mb-10">
                {home.freshDesc}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {farmInfo.produce.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    onMouseEnter={() => setActiveProduceImage(item.image)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-5 py-3 border rounded-xl font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                       activeProduceImage === item.image 
                       ? 'bg-brand-dark text-white border-brand-dark scale-105'
                       : 'bg-brand-cream border-brand-earth/10 text-brand-dark hover:bg-white'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-8">
                 <div>
                    <span className="block text-4xl font-serif font-bold text-brand-dark">60</span>
                    <span className="text-sm text-stone-500 uppercase tracking-wide">{home.stats.acres}</span>
                 </div>
                 <div className="h-10 w-px bg-gray-200"></div>
                 <div>
                    <span className="block text-4xl font-serif font-bold text-brand-dark">100%</span>
                    <span className="text-sm text-stone-500 uppercase tracking-wide">{home.stats.organic}</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[3rem] text-center shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          >
            <span className="text-brand-lightGreen font-bold tracking-[0.3em] uppercase mb-4 block">{home.ctaSubtitle}</span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
              {home.ctaTitle}
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              {home.ctaDesc}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-brand-dark hover:bg-brand-lightGreen hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
            >
              {home.ctaBtn}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;