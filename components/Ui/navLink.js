"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, textSize }) {
  const path = usePathname();
  return (
    <Link
      className={`${
        path.startsWith(href)
          ? "text-orange-300  hover:text-orange-200 transition ease-in-out duration-300 text-bright translate-y-2"
          : "text-orange-50  hover:text-orange-200 transition ease-in-out duration-300 text-bright"
      } text-${textSize}`}
      href={href}
    >
      {children}
    </Link>
  );
}
