import logo from "../assets/logo.png";

function NavLink({ to, children, navigate, activePath }) {
  const isActive = activePath === to;

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={`whitespace-nowrap text-[0.72rem] transition hover:text-gold-light min-[380px]:text-xs sm:text-base ${
        isActive ? "text-gold-light" : "text-white"
      }`}
    >
      {children}
    </button>
  );
}

function Header({ navigate, activePath }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-black/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-6 sm:py-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
          className="flex shrink-0 items-center gap-2 text-left transition hover:text-gold-light sm:gap-3"
        >
          <img
            src={logo}
            alt="Atlas Shawarma logo"
            className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-14 sm:w-14"
          />
          <span className="text-base font-black leading-tight sm:text-2xl">
            <span>Atlas</span>
            <span className="hidden sm:inline"> <span className="text-gold-light">Shawarma</span></span>
          </span>
        </button>

        <div className="flex min-w-0 shrink items-center justify-end gap-2 font-bold min-[380px]:gap-3 sm:shrink-0 sm:gap-6">
          <NavLink to="/menu" navigate={navigate} activePath={activePath}>
            Menu
          </NavLink>
          <NavLink to="/about" navigate={navigate} activePath={activePath}>
            About
          </NavLink>
          <NavLink to="/location" navigate={navigate} activePath={activePath}>
            Location
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
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
}

function SiteLayout({ children, navigate, activePath }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header navigate={navigate} activePath={activePath} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
