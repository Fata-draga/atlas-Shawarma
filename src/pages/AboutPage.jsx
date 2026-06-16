import PageHeading from "../components/PageHeading";

function AboutPage() {
  return (
    <section className="bg-dark-light px-4 py-16 sm:px-6 sm:py-20">
      <PageHeading eyebrow="About" title="Built With Care">
        <div className="space-y-5 text-left">
          <p>
            Atlas Shawarma is built on experience, passion, and care. The name Atlas is inspired by
            the ancient Greek Titan known for strength and endurance, a symbol of carrying something
            important with pride.
          </p>
          <p>
            For us, Atlas means carrying good food, honest flavours, and friendly service to the
            community. It is a place for fresh halal shawarma, generous portions, and the kind of
            warm welcome that makes a quick meal feel personal.
          </p>
          <p>
            Alan, the owner, has spent many years working in the shawarma and fast-food industry.
            Over time, he developed his own way of preparing food, especially the sauces, which are
            homemade, tested, and improved by him with patience and care.
          </p>
          <p>
            Atlas Shawarma is not just another takeaway. Alan puts heart into the food, the service,
            and the atmosphere. His goal is to serve bold Middle Eastern flavours with quality
            ingredients while keeping prices as accessible as possible, so more people in Reading
            can enjoy good food made with pride.
          </p>
        </div>
      </PageHeading>
    </section>
  );
}

export default AboutPage;
