import { useEffect, useState } from "react";
import { googleMapsListingUrl } from "../siteData";

function GoogleReviews() {
  const apiKey = "";
  const placeId = "";
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(apiKey && placeId));

  useEffect(() => {
    if (!apiKey || !placeId) {
      setIsLoading(false);
      return;
    }

    async function loadGoogleReviews() {
      try {
        // Add the Google Places API key above when it is available.
        // Add the Atlas Shawarma Google Place ID above when it is available.
        // For production, call Places API from a small backend endpoint so the API key is not exposed.
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`,
        );
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch {
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadGoogleReviews();
  }, [apiKey, placeId]);

  return (
    <section className="border-y border-gold/20 bg-dark-light px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-light">
          Google Reviews
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">What Guests Say</h2>

        {isLoading ? (
          <p className="mt-6 text-gray-300">Loading Google reviews...</p>
        ) : reviews.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <article
                key={`${review.authorAttribution?.displayName}-${review.publishTime}`}
                className="rounded-lg border border-gold/25 bg-black p-5 text-left shadow-lg"
              >
                <p className="text-sm font-black uppercase tracking-[0.24em] text-gold-light">
                  Google review
                </p>
                <h3 className="mt-3 text-lg font-black">
                  {review.authorAttribution?.displayName || "Google reviewer"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {review.text?.text || "Review text unavailable."}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-xl rounded-lg border border-gold/25 bg-black p-6 shadow-lg">
            <p className="text-lg font-black text-white">Google reviews loading soon</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              We are preparing this section to display live Google reviews directly from the
              official Atlas Shawarma listing.
            </p>
            <a
              href={googleMapsListingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-md bg-gold-light px-6 py-3 font-black text-black transition hover:bg-gold"
            >
              See all Google reviews
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default GoogleReviews;
