import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-hero-banner bg-cover bg-center brightness-50"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={logo}
          alt="Atlas Shawarma Logo"
          className="mx-auto h-24 md:h-32 w-auto mb-4"
          variants={itemVariants}
        />
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold text-shadow-lg"
          variants={itemVariants}
        >
          Freshly Made Shawarma
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl lg:text-2xl font-light tracking-wider text-gold"
          variants={itemVariants}
        >
          100% Halal • Fresh Ingredients • Authentic Flavours
        </motion.p>
        <motion.div className="mt-10 flex justify-center gap-4" variants={itemVariants}>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer bg-gold text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-gold-light transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-sm"
          >
            View Menu
          </Link>
          <Link
            to="location"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer bg-transparent border-2 border-gold text-gold font-bold py-3 px-8 rounded-full text-lg hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Find Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;