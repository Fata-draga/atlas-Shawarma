import { motion } from 'framer-motion';
import { Gift, Percent, Instagram } from 'lucide-react';

const OpeningSoon = () => {
  return (
    <section className="relative py-24 bg-opening-banner bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-cormorant font-bold text-gold mb-4"
        >
          Opening Soon on Oxford Road
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          Get ready, Reading! Atlas Shawarma is bringing authentic, delicious shawarma to your neighborhood.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center p-6 bg-dark/50 rounded-lg border border-gold/30">
            <Gift size={40} className="text-gold mb-3" />
            <h3 className="text-xl font-semibold mb-2">Launch Offers</h3>
            <p className="text-gray-400">Special discounts and deals during our opening week!</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-dark/50 rounded-lg border border-gold/30">
            <Percent size={40} className="text-gold mb-3" />
            <h3 className="text-xl font-semibold mb-2">Student Discount</h3>
            <p className="text-gray-400">Show your student ID for an exclusive discount.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-dark/50 rounded-lg border border-gold/30">
            <Instagram size={40} className="text-gold mb-3" />
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-400">Stay updated on our launch via social media.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningSoon;