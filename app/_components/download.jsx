import Image from "next/image";
import image1 from "@/public/images/Play store.png";
import image2 from "@/public/images/apple store.png";
import image3 from "@/public/images/Group.png";

function Download() {
  return (
    <section className="bg-[#03B89E] py-[35px] sm:py-[50px]">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center py-[60px] gap-[30px]">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg xs:text-2xl sm:text-2xl md:text-[25px] lg:text-[38px] xl:text-[45px] font-semibold mb-[10px] sm:mb-[20px] uppercase lg:leading-[45px]">
            Download The SAFE <br /> MEDICAL App
          </h2>
          <p className="text-white opacity-[0.9] font-light text-[16px] sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-[10px] sm:mb-[20px]">
            Register and start ordering in <br /> less than 2 minutes.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <div className="relative w-[100%] aspect-[3/1] mr-2">
              <Image
                src={image1}
                alt="Play Store"
                objectFit="contain"
                
              />
            </div>
            <div className="relative w-[100%] aspect-[3/1]">
              <Image
                src={image2}
                alt="Apple Store"
                objectFit="contain"
                
              />
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[100%] sm:max-w-[80%] md:max-w-[50%] aspect-[515/452]">
          <Image
            src={image3}
            alt="image"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Download;
