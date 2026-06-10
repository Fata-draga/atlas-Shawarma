import logo from "./assets/logo.png";
import backround from "./assets/backround.png";

export default function App() {
  return (
    <div id="top" className="bg-black text-white min-h-screen">
      <nav className="border-b border-yellow-500/30 bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-2 md:gap-3">
            <img src={logo} alt="Atlas Shawarma" className="h-10 md:h-16 w-auto" />
            <h1 className="text-lg md:text-3xl font-black leading-tight">
              Atlas <span className="text-yellow-400">Shawarma</span>
            </h1>
          </a>

          <div className="flex gap-3 md:gap-8 text-xs md:text-base font-bold">
            <a href="#menu" className="hover:text-yellow-400">Menu</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#location" className="hover:text-yellow-400">Location</a>
          </div>
        </div>
      </nav>

      <section className="bg-black pt-6 md:pt-10">
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <img
            src={backround}
            alt="Atlas Shawarma fresh halal food in Reading"
            className="w-full h-auto block"
          />

          <div className="px-4 md:px-0 mt-5 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-xl font-black text-base md:text-lg hover:bg-yellow-300 text-center"
            >
              View Menu
            </a>

            <a
              href="#location"
              className="border-2 border-yellow-400 bg-black px-6 md:px-8 py-3 rounded-xl font-black text-base md:text-lg hover:bg-yellow-400 hover:text-black text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-6">
            Our <span className="text-yellow-400">Menu</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Fresh shawarma, plates, wraps, pizza, fatayer, roast chicken, sides and drinks.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
            {[
              ["Chicken Shawarma Wrap", "£5.50"],
              ["Lamb Shawarma Wrap", "£6.00"],
              ["Chicken Shawarma Plate", "£8.00"],
              ["Lamb Shawarma Plate", "£9.00"],
              ["Mixed Shawarma Plate", "£9.00"],
              ["Half Roast Chicken", "£7.00"],
            ].map(([item, price]) => (
              <div
                key={item}
                className="bg-zinc-950 border border-yellow-500/30 rounded-2xl p-5 md:p-6 flex justify-between gap-4"
              >
                <h3 className="text-lg md:text-xl font-black text-white">{item}</h3>
                <p className="text-yellow-400 font-black text-lg md:text-xl">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-6">
            Why Choose <span className="text-yellow-400">Atlas?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Atlas Shawarma serves fresh, authentic halal food in the heart of Reading.
            From chicken and lamb shawarma to wraps, plates, pizza, fatayer, roast chicken
            and desserts, every meal is prepared with quality ingredients, bold flavours
            and friendly service.
          </p>
        </div>
      </section>

      <section id="location" className="py-16 md:py-20 px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-black mb-6">
          Find <span className="text-yellow-400">Us</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          349 Oxford Road, Reading RG30 1AY
        </p>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-yellow-500/40">
          <iframe
            title="Atlas Shawarma Location"
            src="https://www.google.com/maps?q=349%20Oxford%20Road%20Reading%20RG30%201AY&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer className="border-t border-yellow-500/20 py-8 px-4 text-center text-gray-400">
        © 2026 Atlas Shawarma • 349 Oxford Road, Reading RG30 1AY
      </footer>
    </div>
  );
}