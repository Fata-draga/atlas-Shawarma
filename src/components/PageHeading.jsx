function PageHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-light">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black sm:text-5xl">{title}</h1>
      {children ? (
        <div className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">{children}</div>
      ) : null}
    </div>
  );
}

export default PageHeading;
