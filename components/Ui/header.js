import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo-next.png";
import NavLink from "./navLink";

function Header() {
  return (
    <header className="flex justify-between text-sm items-center gap-12">
      <div className="">
        <Link href="/">
          {/* <h2 className="text text-orange-50 text-5xl font-variant font-semibold">
            NextLevel Food
          </h2> */}
          <Image
            src={Logo}
            width={300}
            height={100}
            alt="Icon and the name of NextLevel Food"
            className="w-52 md:w-72 xl:w-96"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-4 md:gap-8 sm:gap-6">
          <li className="text-orange-50 hover:text-orange-200">
            <NavLink textSize="sm md:text-xl xl:text-2xl" href="/meals">
              Meals
            </NavLink>
          </li>

          <li className="text-orange-50 hover:text-orange-200">
            <NavLink textSize="sm md:text-xl xl:text-2xl" href="/community">
              Community
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
