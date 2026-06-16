import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gold/20 bg-dark-light px-4 py-8 text-center sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3">
        <img src={logo} alt="Atlas Shawarma logo" className="h-10 w-10 rounded-full object-contain" />
        <p className="text-sm text-gray-300">© 2026 Atlas Shawarma. All Rights Reserved.</p>
        <p className="text-sm leading-6 text-gray-400">
          Designed & Developed by
          <br />
          <span className="font-bold text-sky-400">Lavena Solutions Ltd</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
