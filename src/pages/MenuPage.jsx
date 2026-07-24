import menuImage from "../assets/menu.png";
import PageHeading from "../components/PageHeading";

function MenuPage() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <PageHeading
          eyebrow="Menu"
          title={
            <span>
              Our <span className="text-gold-light">Full Menu</span>
            </span>
          }
        >
          <p>
            Browse the full Atlas Shawarma menu of fresh halal wraps, plates, grilled dishes,
            sides, and drinks.
          </p>
        </PageHeading>

        <div className="mt-8 overflow-visible rounded-lg border border-gold/30 bg-white p-2 shadow-gold-glow-sm sm:p-4">
          <img
            src={menuImage}
            alt="Atlas Shawarma full menu"
            className="mx-auto h-auto w-full max-w-full object-contain"
          />
        </div>
        <p className="mt-3 text-xs text-gray-500 sm:text-sm">
          Images are for illustration purposes only. Actual presentation may vary.
        </p>
      </div>
    </section>
  );
}

export default MenuPage;
