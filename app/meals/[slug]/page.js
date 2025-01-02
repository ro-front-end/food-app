import { getMeal } from "@/app/lib/meals";

import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:justify-between gap-6 items-center mb-12 text-orange-50 mt-16 px-4 md:px-10 xl:px-64">
        <div>
          <Image
            src={meal.image}
            alt={meal.title}
            width={500}
            height={500}
            className="rounded-full w-52 sm:w-64 xl:w-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:items-end gap-y-2 sm:gap-y-5 md:gap-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-7xl font-semibold text-center sm:text-end">
            {meal.title}
          </h1>
          <p className="text-slate-300 text-xl italic">
            by{" "}
            <a
              className="text-orange-400"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
        </div>
      </header>
      <p className="text-lg text-orange-100 opacity-60 px-6 mb-12 md:px-10 xl:px-64">
        {meal.summary}
      </p>
      <main className="text-orange-100 mb-12 px-4 md:px-10 xl:px-64 md:text-lg">
        <p
          className="text-md bg-orange-900 bg-opacity-10 p-10 rounded-3xl"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
