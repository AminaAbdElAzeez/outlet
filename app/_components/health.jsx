import Image from "next/image";
import image1 from "@/public/images/img.png";

function Health() {
  return (
    <section className="bg-[#E0EFFA] py-[35px] sm:py-[50px]">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center gap-[10px]">
        <div className="text-[#184363] capitalize text-center md:text-left">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-[10px] sm:mb-[20px] ">
            Your Prescription for <br /> Affordable Health <br /> Solutions!
          </h1>
          <p className="text-[13px] xs:text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-2xl opacity-[0.8]">
            Your path to well-being starts here,
            <br /> where every purchase is a
            <br /> prescription for savings.
          </p>
        </div>
        <div className="relative w-full max-w-[100%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[572px] aspect-[572/482] mb-[20px] md:mb-[0px]">
          <Image
            src={image1}
            alt="Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Health;
