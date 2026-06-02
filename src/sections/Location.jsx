import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white">Find Us</h2>
          <p className="text-lg text-gold mt-2">Visit Us for an Unforgettable Meal</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-gray-400">349 Oxford Road</p>
                  <p className="text-gray-400">Reading, RG30 1AY</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-gold mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">(Phone number coming soon)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-gold mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Opening Hours</h3>
                  <p className="text-gray-400">Mon - Sun: 12:00 PM - 11:00 PM</p>
                  <p className="text-gray-400">(Opening hours subject to change)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-lg border-2 border-gold/50 bg-dark-lighter flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <p>Google Maps Placeholder</p>
              <p className="text-sm">(Interactive map will be embedded here)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;