import { Phone } from "lucide-react";
import flyerImage from "../assets/backround.png";
import {
  googleMapsDirectionsUrl,
  googleMapsListingUrl,
  phoneHref,
  phoneNumber,
} from "../siteData";

const customerReviews = [
  {
    name: "Hewa Piroti",
    text: "Best shawarma in Reading I never had shawarma like that before absolutely amazing 10/10 👌",
  },
  {
    name: "RahmatUllah Ahmadzai",
    text: "Absolutely fantastic experience at Atlas Shawarma in Reading! The food was fresh, full of flavour, and cooked perfectly.",
  },
  {
    name: "Halwest Amanj",
    text: "Number one in Reading well done",
  },
  {
    name: "Abdulkhalioq Sofi",
    text: "Well done good service and very testy",
  },
  {
    name: "Hemen Mohammed",
    text: "Best shawarma I had mashalah always going back there love customer service and very helpful and smile",
  },
];

function GoogleRatingSummary() {
  return (
    <section className="mx-4 mt-6 rounded-lg border border-gold/30 bg-dark-light px-5 py-6 text-center shadow-gold-glow-sm sm:mx-auto sm:max-w-2xl">
      <p className="text-2xl font-black text-gold-light sm:text-3xl">
        ⭐ 4.6/5 Google Rating
      </p>
      <p className="mt-2 text-sm font-semibold text-gray-300 sm:text-base">
        Based on 17 Google Reviews
      </p>
    </section>
  );
}

function CustomerReviews() {
  return (
    <section className="border-y border-gold/20 bg-dark-light px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-light">
            Customer Reviews
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">What Customers Say</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customerReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-lg border border-gold/25 bg-black p-5 shadow-lg"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-light">
                ★★★★★
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-300">“{review.text}”</p>
              <p className="mt-4 font-black text-white">— {review.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={googleMapsListingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-gold-light px-6 py-3 font-black text-black transition hover:bg-gold"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="bg-black px-0 pb-14 pt-5 sm:px-6 sm:pb-20 sm:pt-8">
        <div className="mx-auto max-w-6xl">
          <img
            src={flyerImage}
            alt="Atlas Shawarma restaurant flyer"
            className="block h-auto w-full object-contain"
          />

          <GoogleRatingSummary />

          <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-3 px-4 sm:flex-row sm:justify-center sm:px-0">
            <button
              type="button"
              onClick={() => navigate("/menu")}
              className="rounded-md bg-gold-light px-7 py-3 text-center text-base font-black text-black shadow-gold-glow-sm transition hover:bg-gold sm:min-w-44"
            >
              View Menu
            </button>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gold-light px-7 py-3 text-center text-base font-black text-gold-light transition hover:bg-gold-light hover:text-black sm:min-w-44"
            >
              Get Directions
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-gold-light bg-gold-light px-7 py-3 text-center text-black shadow-gold-glow transition hover:-translate-y-0.5 hover:bg-white hover:shadow-gold-glow sm:min-w-52"
            >
              <Phone size={24} aria-hidden="true" />
              <span className="flex flex-col leading-tight">
                <span className="text-base font-black">Call Now</span>
                <span className="text-sm font-bold">{phoneNumber}</span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <CustomerReviews />
    </>
  );
}

export default HomePage;
