import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 mt-8 gap-4 xl:gap-12">
      {meals.map((meal) => (
        <li className="flex" key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
