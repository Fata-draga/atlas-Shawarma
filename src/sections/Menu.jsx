import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Chicken Shawarma Wrap', description: 'Tender chicken, garlic sauce, pickles, and fries in a toasted wrap.', price: '£7.99' },
  { name: 'Lamb Shawarma Wrap', description: 'Succulent lamb, tahini sauce, onions, and parsley in a fresh wrap.', price: '£8.99' },
  { name: 'Mixed Shawarma Box', description: 'A generous portion of chicken and lamb shawarma on a bed of rice or fries.', price: '£11.99' },
  { name: 'Loaded Shawarma Fries', description: 'Crispy fries topped with your choice of shawarma, cheese, and our special sauce.', price: '£9.49' },
  { name: 'Falafel Wrap', description: 'Crispy falafel, hummus, fresh salad, and tahini sauce in a soft wrap.', price: '£6.99' },
];

const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="menu" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white">Our Menu</h2>
          <p className="text-lg text-gold mt-2">A Taste of Perfection</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-dark-lighter rounded-lg overflow-hidden border border-gray-800 group transition-all duration-300 hover:border-gold hover:shadow-gold-glow"
              variants={itemVariants}
            >
              <div className="p-6">
                <h3 className="text-2xl font-cormorant font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                <p className="text-gray-400 font-light mb-4">{item.description}</p>
                <p className="text-xl font-bold text-gold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;