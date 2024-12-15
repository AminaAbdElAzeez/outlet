"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import image1 from "@/public/images/logo.png";
import ActiveLink from "./activeLink";

function BottomHeader() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <nav className="bg-white border py-[8px]">
      <div className="container flex items-center justify-between gap-[30px] pl-[0]">
        <Link href="/">
          <div className="relative w-[100px] h-[50px]">
            <Image
              src={image1}
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </Link>
        <ul className="ml-4 hidden md:flex item-center justify-between gap-[5px]">
          <li>
            <ActiveLink href={"/"}>home</ActiveLink>
          </li>
          <li>
            <ActiveLink href={"/products"}>products</ActiveLink>
          </li>
          <li>
            <ActiveLink href={"/order"}>order</ActiveLink>
          </li>
          <li>
            <ActiveLink href={"/about"}>about us</ActiveLink>
          </li>
        </ul>
        <button className=" capitalize text-white bg-[#03B89E] py-[10px] px-[40px] font-semibold rounded-[10px] hidden md:block">
          log in
        </button>
        <div className="md:hidden flex items-center">
          <button
            className=" inline-flex items-center justify-center p-2 rounded-md text-[#03B89E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#03B89E]"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="container md:hidden mt-[15px]">
          <ul className="flex flex-col bg-[##F0F0F0] py-[20px] px-[15px] gap-[5px] rounded-[10px] border mb-2">
            <li>
              <ActiveLink href={"/"}>home</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/products"}>products</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/order"}>order</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/about"}>about us</ActiveLink>
            </li>
            <li>
              <button className=" capitalize text-[#fff] bg-[#03B89E] py-[10px] px-[40px] text-lg font-semibold rounded-[10px] block md:hidden w-full mx-auto mt-[15px]">
                log in
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default BottomHeader;
