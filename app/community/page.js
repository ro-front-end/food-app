import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import Image from "next/image";

export const metadata = {
  title: "Community",
  description: "Blog for you to connect other foodies and find new recipes.",
};

function CommunityPage() {
  return (
    <section className="flex flex-col py-10 justify-center text-center px-4">
      <article className="text-3xl text-center">
        <h1 className="text-orange-50 text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 xl:text-7xl">
          One Shared Passion:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 via-orange-500 to-orange-300">
            Food
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl xl:text-4xl text-orange-100 text-opacity-60">
          Join our community and share your favourite recipes!
        </p>
      </article>

      <article className="text-orange-200 flex flex-col justify-center items-center mt-20 text-xl font-semibold">
        <h2 className="text-3xl mb-12 md:text-5xl">Community perks</h2>

        <ul className="flex flex-col text-orange-50 justify-center items-center space-y-14">
          <li className="flex flex-col justify-center items-center space-y-4">
            <Image
              width={130}
              height={130}
              src={mealIcon}
              alt="A delicious meal"
            />
            <p>Share and discover recipes</p>
          </li>
          <li className="flex flex-col justify-center items-center space-y-4">
            <Image
              width={130}
              height={130}
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p>Find new friends and like-minded people</p>
          </li>
          <li className="flex flex-col justify-center items-center space-y-4">
            <Image
              width={130}
              height={130}
              src={eventsIcon}
              alt="A crowd of people cooking in a event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default CommunityPage;
