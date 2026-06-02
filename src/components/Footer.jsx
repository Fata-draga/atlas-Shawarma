import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={24} />, href: '#' },
    { icon: <Facebook size={24} />, href: '#' },
    { icon: <Twitter size={24} />, href: '#' },
  ];

  return (
    <footer className="bg-dark-light py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-cormorant font-bold text-gold">Atlas Shawarma</h3>
            <p className="text-sm text-gray-400 mt-1">349 Oxford Road, Reading</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label={`Follow us on ${link.icon.type.displayName}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Atlas Shawarma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;