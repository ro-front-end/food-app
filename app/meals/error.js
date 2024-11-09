"use client";

export default function Error() {
  return (
    <section className="text-orange-50 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-32 sm:mt-16 md:mt-32 xl:mt-40">
      <h1 className="uppercase text-orange-600 text-5xl xl:text-8xl mb-6 font-semibold">
        An error occurred!
      </h1>
      <p>Failed to download data. Please try again later.</p>
    </section>
  );
}
