import PageHeading from "../components/PageHeading";
import extrasImage from "../assets/menu-items/extras.webp";
import falafelImage from "../assets/menu-items/falafel.webp";
import fatayerImage from "../assets/menu-items/fatayer.webp";
import kidsMealImage from "../assets/menu-items/kids-meal.webp";
import pizzaImage from "../assets/menu-items/pizza.webp";
import shawarmaPortionImage from "../assets/menu-items/shawarma-portion.webp";
import shawarmaRiceImage from "../assets/menu-items/shawarma-rice.webp";
import shawarmaWrapImage from "../assets/menu-items/shawarma-wrap.webp";
import soupImage from "../assets/menu-items/soup.webp";

const menuSections = [
  {
    title: "Shawarma Sandwiches & Wraps",
    image: shawarmaWrapImage,
    items: [
      { name: "Chicken Shawarma Sandwich", price: "£5.50" },
      { name: "Chicken Shawarma Wrap", price: "£5.50" },
      { name: "Lamb Shawarma Sandwich", price: "£6.00" },
      { name: "Lamb Shawarma Wrap", price: "£6.00" },
      { name: "Mixed Shawarma Sandwich", price: "£6.00" },
      { name: "Mixed Shawarma Wrap", price: "£6.00" },
    ],
  },
  {
    title: "Shawarma Portions / Plates",
    image: shawarmaPortionImage,
    items: [
      { name: "Chicken Shawarma Portion", note: "Served with chips & salad", price: "£7.50" },
      { name: "Lamb Shawarma Portion", note: "Served with chips & salad", price: "£8.00" },
      { name: "Mixed Shawarma Portion", note: "Served with chips & salad", price: "£8.00" },
      { name: "Chicken Shawarma Plate", note: "Served with 2 naan & salad", price: "£8.50" },
      { name: "Lamb Shawarma Plate", note: "Served with 2 naan & salad", price: "£9.00" },
      { name: "Mixed Shawarma Plate", note: "Served with 2 naan & salad", price: "£9.00" },
    ],
  },
  {
    title: "Soups and Rice",
    image: soupImage,
    items: [
      { name: "Chicken Shawarma with Rice", price: "£9.00", image: shawarmaRiceImage },
      { name: "Lamb Shawarma with Rice", price: "£10.00", image: shawarmaRiceImage },
      { name: "Mixed Shawarma with Rice", price: "£10.00", image: shawarmaRiceImage },
      { name: "Chickpeas Soup", note: "Served with 2 naan", price: "£5.00" },
      { name: "Chickpeas Soup & Rice", note: "Served with 2 naan", price: "£7.00" },
    ],
  },
  {
    title: "Falafel",
    image: falafelImage,
    items: [
      { name: "Falafel Sandwich", price: "£4.50" },
      { name: "7 Pieces Falafel with 2 Naan", price: "£7.00" },
    ],
  },
  {
    title: '10" Pizzas',
    image: pizzaImage,
    items: [
      { name: "Margherita Pizza", price: "£5.00" },
      { name: "Cheese & Tomato Pizza", price: "£5.00" },
      { name: "Chicken & 3 Veg", price: "£6.50" },
      { name: "Lamb & 3 Veg", price: "£7.00" },
      { name: "Veg Pizza", price: "£5.50" },
      { name: "Mixed Pizza", price: "£7.00" },
    ],
  },
  {
    title: "Fatayer",
    image: fatayerImage,
    items: [
      { name: "Mixed", price: "£5.00" },
      { name: "Chicken", price: "£4.50" },
      { name: "Lamb", price: "£5.00" },
      { name: "Veg", price: "£4.00" },
      { name: "Cheese", price: "£4.00" },
      { name: "Spinach", price: "£3.50" },
    ],
  },
  {
    title: "Kids Meals",
    image: kidsMealImage,
    items: [
      { name: "Chicken Nuggets Kids Meal", note: "5 pcs with chips & a drink", price: "£5.00" },
    ],
  },
  {
    title: "Extra Toppings",
    image: pizzaImage,
    items: [
      { name: "Extra Pizza Toppings", note: "Mushrooms, jalapeno, green pepper, onions, olives, sweetcorn, fresh tomato, fresh green chilli", price: "£0.50" },
    ],
  },
  {
    title: "Extras",
    image: extrasImage,
    items: [
      { name: "2 Naan", price: "£1.00" },
      { name: "2 Samon", price: "£1.00" },
      { name: "Drinks", price: "£1.00" },
      { name: "Chips", note: "Regular", price: "£1.50" },
      { name: "Chips", note: "Large", price: "£3.00" },
      { name: "Salad", note: "Regular", price: "£1.50" },
      { name: "Salad", note: "Large", price: "£2.50" },
      { name: "Rice", note: "Portion", price: "£4.00" },
      { name: "Sauces", price: "£0.50" },
    ],
  },
];

function MenuItem({ item, sectionImage }) {
  const image = item.image || sectionImage;

  return (
    <article className="group overflow-hidden rounded-lg border border-gold/20 bg-dark-light transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-gold-glow-sm">
      {image && (
        <div className="h-36 overflow-hidden bg-black">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex min-h-32 flex-col justify-between gap-4 p-5">
        <div>
          <h3 className="text-xl font-black leading-tight text-white">{item.name}</h3>
          {item.note && <p className="mt-2 text-sm leading-6 text-gray-400">{item.note}</p>}
        </div>
        <p className="text-2xl font-black text-gold-light">{item.price}</p>
      </div>
    </article>
  );
}

function MenuSection({ section }) {
  return (
    <section className="mt-10 rounded-lg border border-gold/20 bg-black/40 p-4 shadow-lg sm:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-black text-white sm:text-3xl">{section.title}</h2>
        <div className="h-1 w-24 rounded-full bg-gold-light sm:w-32" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <MenuItem key={`${section.title}-${item.name}-${item.note || ""}`} item={item} sectionImage={section.image} />
        ))}
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeading
          eyebrow="Menu"
          title={
            <span>
              Our <span className="text-gold-light">Full Menu</span>
            </span>
          }
        >
          <p>
            Fresh halal shawarma, pizzas, fatayer, falafel, soups, rice, sides and kids meals.
          </p>
        </PageHeading>

        <div className="mt-8 rounded-lg border border-gold/30 bg-dark-light p-5 text-center shadow-gold-glow-sm sm:p-6">
          <h2 className="text-2xl font-black text-gold-light">Food Allergies & Intolerances</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-gray-300">
            Please speak to a member of staff about the ingredients in our dishes before placing your order.
          </p>
        </div>

        {menuSections.map((section) => (
          <MenuSection key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
