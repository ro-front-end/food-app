import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { getMeals } from "../lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  return (
    <>
      <header className="flex flex-col gap-2 py-10 items-center justify-center text-center sm:text-start sm:items-start sm:justify-start">
        <h1 className="text-orange-50 text-4xl font-semibold">
          Delicious Meals, created{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            by you
          </span>
        </h1>
        <p className="text-sm md:text-lg text-orange-100 opacity-60 mb-6">
          Choose your favourite recipe and cook it yourself. It&apos;s easy and
          fun!
        </p>
        <p>
          <Link
            className="bg-gradient-to-r from-orange-700 to-orange-400 py-4 px-4 text-orange-50 text-sm md:text-lg font-semibold rounded-full"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <section className="py-10 sm:py-2">
        <Suspense
          fallback={
            <p className="mt-16 text-orange-400 text-5xl text-center">
              Downloading meals...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </section>
    </>
  );
}

export default MealsPage;
