import Image from "next/image";
import image1 from "@/public/images/Main.png";

function Banner() {
  return (
    <section className="py-[35px] sm:py-[50px]">
      <div className="container element-center">
        <Image src={image1} alt="Banner" width={1240} height={444} />
      </div>
    </section>
  );
}

export default Banner;
