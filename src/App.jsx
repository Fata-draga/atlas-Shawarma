import logo from "./assets/logo.png";
import flyer from "./assets/flyer.png";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="border-b border-yellow-500/30 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Atlas Shawarma" className="h-16 md:h-20 w-auto" />
            <h1 className="text-2xl md:text-3xl font-black">
              Atlas <span className="text-yellow-400">Shawarma</span>
            </h1>
          </div>

          <div className="flex gap-4 md:gap-8 text-sm md:text-base font-bold">
            <a href="#menu" className="hover:text-yellow-400">Menu</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#location" className="hover:text-yellow-400">Location</a>
          </div>
        </div>
      </nav>

      <section className="relative px-6 py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_45%)]"></div>

        <div className="relative max-w-6xl mx-auto">
          <img
            src={logo}
            alt="Atlas Shawarma"
            className="h-40 md:h-64 mx-auto mb-8 drop-shadow-[0_0_35px_rgba(250,204,21,0.45)]"
          />

          <p className="text-yellow-400 font-black tracking-[0.35em] mb-4">
            100% HALAL • FRESH • FLAVOURFUL
          </p>

          <h2 className="text-6xl md:text-9xl font-black leading-none mb-8">
            Fresh Halal
            <span className="block text-yellow-400">Shawarma</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Authentic flavours. Premium ingredients. Freshly prepared every day on Oxford Road.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-300"
            >
              View Menu
            </a>

            <a
              href="#location"
              className="border-2 border-yellow-400 px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 hover:text-black"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl md:text-7xl font-black mb-10">
            Opening <span className="text-yellow-400">Soon</span>
          </h2>

          <img
            src={flyer}
            alt="Atlas Shawarma Flyer"
            className="w-full max-w-6xl mx-auto rounded-2xl shadow-[0_0_60px_rgba(250,204,21,0.35)] border border-yellow-500/40"
          />
        </div>
      </section>

      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10">
            Menu <span className="text-yellow-400">Coming Soon</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {["Shawarma Wraps", "Loaded Fries", "Boxes & Drinks"].map((item) => (
              <div key={item} className="bg-zinc-950 border border-yellow-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-black text-yellow-400">{item}</h3>
                <p className="text-gray-400 mt-3">
                  Fresh, hot and full of flavour. Final menu and prices coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Why Choose <span className="text-yellow-400">Atlas?</span>
          </h2>

          <p className="text-gray-300 text-xl">
            Fresh ingredients, authentic recipes, 100% halal meat and bold flavours served daily.
          </p>
        </div>
      </section>

      <section id="location" className="py-20 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          349 <span className="text-yellow-400">Oxford Road</span>
        </h2>

        <p className="text-gray-300 text-xl">
          Reading • Eat In • Takeaway • Delivery Coming Soon
        </p>
      </section>

      <footer className="border-t border-yellow-500/20 py-8 text-center text-gray-400">
        © 2026 Atlas Shawarma • Reading
      </footer>
    </div>
  );
}