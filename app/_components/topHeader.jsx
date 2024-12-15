import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaSearch } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import LanguageDropdown from "@/app/_components/languageDropdown";

function TopHeader() {
  return (
    <section className="py-[15px]">
      <div className="container flex items-center justify-between gap-[15px] ">
        <ul className="flex items-center justify-between gap-1 sm:gap-[6px]">
          <li className="border-[1px] border-[#222222] p-[3px] sm:p-[4px] rounded-[50%]">
            <Link href={"/"}>
              <FaFacebookF className="text-xs sm:text-base" />
            </Link>
          </li>
          <li className="border-[1px] border-[#222222] p-[3px] sm:p-[4px] rounded-[50%]">
            <Link href={"/"}>
              <FaLinkedinIn className="text-xs sm:text-base" />
            </Link>
          </li>
          <li className="border-[1px] border-[#222222] p-[3px] sm:p-[4px] rounded-[50%]">
            <Link href={"/"}>
              <TiSocialInstagram className="text-xs sm:text-base" />
            </Link>
          </li>
          <li className="border-[1px] border-[#222222] p-[3px] sm:p-[4px] rounded-[50%]">
            <Link href={"/"}>
              <FaYoutube className="text-xs sm:text-base" />
            </Link>
          </li>
          <li className="block md:hidden">
            <button
              type="submit"
              className="text-[#fff] bg-[#03B89E] rounded-[50%] p-[6px]"
            >
              <FaSearch className="text-xs sm:text-base" />
            </button>
          </li>
        </ul>

        <form className="hidden md:flex items-center border-[1px] border-[#CECECE] bg-[#f7fbff] rounded-[7px] ">
          <input
            type="search"
            placeholder="Search medicine, medical products"
            className="border-none outline-none py-[6px] px-[10px] w-[330px] lg:w-[500px] rounded-[7px]
            md:text-sm lg:text-base"
          />
          <button
            type="submit"
            className="text-[#fff] bg-[#03B89E] rounded-[7px] px-[9px] py-[10px]"
          >
            <FaSearch className="" />
          </button>
        </form>

        <LanguageDropdown />
      </div>
    </section>
  );
}

export default TopHeader;
