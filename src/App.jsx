import logo from "./assets/logo.png";
import flyer from "./assets/flyer.png";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Atlas Shawarma"
              className="h-32 w-auto"
            />

            <h1 className="text-3xl font-bold">
              Atlas <span className="text-yellow-400">Shawarma</span>
            </h1>
          </div>

          <div className="hidden md:flex gap-8 font-semibold">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#location">Location</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Fresh Halal
            <span className="block text-yellow-400">
              Shawarma
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Authentic flavours. Premium ingredients.
            Freshly prepared every day on Oxford Road.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold">
              View Menu
            </button>

            <button className="border border-yellow-400 px-8 py-3 rounded-lg">
              Find Us
            </button>
          </div>

        </div>
      </section>

      {/* Flyer Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-bold mb-12">
            Opening <span className="text-yellow-400">Soon</span>
          </h2>

          <img
            src={flyer}
            alt="Atlas Shawarma Flyer"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
          />

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <p className="text-gray-300 text-lg">
            Fresh ingredients, authentic recipes,
            100% halal meat and bold flavours served daily.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 py-8 text-center text-gray-400">
        © 2026 Atlas Shawarma • Reading
      </footer>

    </div>
  );
}