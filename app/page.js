import Health from "@/app/_components/health";
import Services from "@/app/_components/services";
import Brands from "@/app/_components/brands";
import Banner from "@/app/_components/banner";
import Download from "@/app/_components/download";
import Contact from "@/app/_components/contact";
import Slider from "@/app/_components/slider";
import ProductList from "@/app/_components/productList";

export default function HomePage() {
  return (
    <section className="pt-[130px] md:pt-[135px] lg:pt-[142px]">
      <Health />
      <Services />
      <Slider />
      <Brands />
      <ProductList />
      <Banner />
      <Download />
      <Contact />
    </section>
  );
}
