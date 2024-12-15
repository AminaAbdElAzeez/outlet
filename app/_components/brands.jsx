import image1 from "@/public/images/image 12.png";
import image2 from "@/public/images/image 16.png";
import image3 from "@/public/images/image 13.png";
import image4 from "@/public/images/image 14.png";
import image5 from "@/public/images/image 15.png";
import image6 from "@/public/images/image 11.png";
import image7 from "@/public/images/image 17.png";
import image8 from "@/public/images/image 18.png";
import image9 from "@/public/images/image 19.png";
import image10 from "@/public/images/image 20.png";
import image11 from "@/public/images/image 21.png";
import image12 from "@/public/images/image 22.png";
import Image from "next/image";

function Brands() {
  return (
    <section className="py-[35px] sm:py-[50px]">
      <div className="container">
        <h2 className="text-[#184363] text-lg xs:text-2xl lg:text-2xl font-bold  mb-[20px] text-center">
          Top Brands
        </h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6  gap-[15px] place-content-center">
          <div className="w-full aspect-[188/95] relative">
            <Image src={image1} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image2} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image3} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image4} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image5} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image6} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image7} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image8} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image src={image9} alt="Brands" fill className=" object-contain" />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image
              src={image10}
              alt="Brands"
              fill
              className=" object-contain"
            />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image
              src={image11}
              alt="Brands"
              fill
              className=" object-contain"
            />
          </div>
          <div className="w-full aspect-[188/95] relative">
            <Image
              src={image12}
              alt="Brands"
              fill
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
