import Image from "next/image";
import image1 from '@/public/images/banner-image-15.png.png'
import image2 from '@/public/images/banner-image-14.png.png'

function Banner() {
  return (
    <section className="py-[35px] sm:py-[50px]">
      <div className="container element-center bg-[url(/images/bg.jfif)] object-cover rounded-lg h-[300px] flex justify-between items-center gap-4 relative">
        <div className=" absolute w-[572px] bottom-[10px] left-[30px] hidden md:block">
          <Image src={image1} alt="Image"
            width={369}
            height={317}
            objectFit="contain"
            className=" absolute left-0 bottom-0 "
          />
        </div>
        <div className="text-[#184363] p-4 absolute left-[38%] right-[50%] w-[400px] text-center">
          <h6 className="text-lg mb-2 sm:mb-4">Pyridoxine Vitamin B6</h6>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-1">Vitamins & Supplements</h4>
        </div>
        <div className=" absolute w-[382px] bottom-[20px] right-[35px] hidden md:block">
          <Image src={image2} alt="Image"
            width={300}
            height={182}
            objectFit="contain"
              className=" absolute right-[10px] bottom-0"
            />
        </div>
      </div>
    </section>
  );
}

export default Banner;
