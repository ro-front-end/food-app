import ShareMealForm from "@/components/share-meal/shareMealForm";

export default function ShareMealPage() {
  return (
    <div className="mt-20 md:mt-24 xl:mt-32 mb-16 xl:mx-32">
      <header className="flex flex-col gap-2 xl:gap-4">
        <h1 className="text-4xl md:text-5xl xl:text-8xl font-semibold text-orange-50">
          Share your{" "}
          <span className="text-4xl sm:text-3xl md:text-5xl xl:text-8xl font-semibold bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
            favourite meal
          </span>
        </h1>
        <p className="text-orange-100 opacity-60 text-xl xl:text-4xl">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <ShareMealForm />
    </div>
  );
}
