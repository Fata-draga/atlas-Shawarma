import {
  address,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsListingUrl,
  emailAddress,
  emailHref,
  openingHours,
  phoneHref,
  phoneNumber,
} from "../siteData";

function LocationPage() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-center rounded-lg border border-gold/25 bg-dark-light p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-light">Location</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Visit Us</h1>
          <div className="mt-6 space-y-5 text-gray-300">
            <div>
              <h2 className="font-black text-white">Address</h2>
              <p className="mt-1">{address}</p>
            </div>
            <div>
              <h2 className="font-black text-white">Opening Hours</h2>
              <p className="mt-1">{openingHours}</p>
            </div>
            <div>
              <h2 className="font-black text-white">Phone</h2>
              <a className="mt-1 inline-block text-gold-light hover:underline" href={phoneHref}>
                {phoneNumber}
              </a>
            </div>
            <div>
              <h2 className="font-black text-white">Email</h2>
              <a className="mt-1 inline-block text-gold-light hover:underline" href={emailHref}>
                {emailAddress}
              </a>
            </div>
          </div>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full justify-center rounded-md bg-gold-light px-7 py-3 text-center font-black text-black transition hover:bg-gold sm:w-fit"
          >
            Get Directions
          </a>
          <a
            href={googleMapsListingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm font-bold text-gold-light underline-offset-4 hover:underline"
          >
            Open Atlas Shawarma on Google Maps
          </a>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-lg border border-gold/30">
          <iframe
            title="Map to Atlas Shawarma, 349 Oxford Road, Reading"
            src={googleMapsEmbedUrl}
            className="h-[360px] w-full sm:h-[460px] lg:h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default LocationPage;
