import TopHeader from "@/app/_components/topHeader";
import BottomHeader from "@/app/_components/bottomHeader";

function Header() {
  return (
    <header className=" fixed w-full bg-white z-50">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
