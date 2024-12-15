"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
function ActiveLink({ children, href }) {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`capitalize text-sm sm:text-base md:text-lg font-semibold block p-3 ${
        isActive ? "text-[#03B89E]" : "text-[#424242]"
      }`}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
