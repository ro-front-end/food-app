import Image from "next/image";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="bg-orange-900 bg-opacity-20 rounded-3xl w-full h-full flex flex-col ">
      <header className="relative h-52 xl:h-72">
        <Image
          className="absolute object-cover rounded-t-3xl"
          src={image}
          alt={title}
          fill
        />
      </header>
      <div className="flex flex-col justify-between flex-1 px-2 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-orange-50">{title}</h2>
          <p className="text-md italic text-orange-100 opacity-30">
            by {creator}
          </p>
        </div>
        <p className="text-orange-100 sm:text-lg mt-4 px-2">{summary}</p>
        <div className="flex justify-center sm:justify-end mt-10">
          <Link
            className="text-orange-50 text-sm sm:text-lg font-semibold py-2 px-4 sm:px-6 text-center bg-gradient-to-r from-orange-700 to-orange-400 rounded-full"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
