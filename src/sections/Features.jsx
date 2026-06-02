import { motion } from 'framer-motion';
import { ChefHat, HeartHandshake, Clock } from 'lucide-react';

const featureData = [
  {
    icon: <ChefHat size={48} className="text-gold" />,
    title: 'Freshly Grilled',
    description: 'Our shawarma is grilled to perfection right when you order, ensuring a hot and delicious meal every time.',
  },
  {
    icon: <HeartHandshake size={48} className="text-gold" />,
    title: '100% Halal',
    description: 'We are proud to serve 100% Halal certified meat, prepared according to the highest standards of quality and tradition.',
  },
  {
    icon: <Clock size={48} className="text-gold" />,
    title: 'Fast Service',
    description: 'Get your delicious shawarma quickly without compromising on quality. Perfect for a quick lunch or a takeaway dinner.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-lighter p-8 rounded-lg border border-gray-800 text-center flex flex-col items-center transition-all duration-300 hover:border-gold hover:shadow-gold-glow-sm"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-cormorant font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;