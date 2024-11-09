import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-5xl sm:text-3xl md:text-7xl xl:text-8xl font-semibold bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
        NextLevel Food for
        <br /> NextLevel Foodies
      </h1>
      <p className="text-orange-100 text-sm md:text-2xl xl:text-3xl">
        Search, Taste and Share meals worldwide!
      </p>
      <div
        className="text-sm flex items-center justify-center gap-6 mt-2
       sm:text-md sm:justify-end
       md:justify-center md:gap-10 md:text-lg
       lg:justify-end
       xl:text-3xl
       "
      >
        <Link
          className="text-orange-500 text-opacity-60 hover:text-opacity-100"
          href="/community"
        >
          Join the Community
        </Link>
        <Link
          className="font-semibold bg-gradient-to-r from-orange-700 to-orange-400 text-orange-50 px-2 py-2 sm:px-3 sm:py-3 md:p-4 rounded-full hover:translate-y-[-6px] transition duration-300 ease-in-out"
          href="/meals"
        >
          Explore Meals
        </Link>
      </div>
    </header>
  );
}
