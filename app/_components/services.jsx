"use client";

import Image from "next/image";
import image1 from "@/public/images/theraphy-1.png";
import image2 from "@/public/images/theraphy-2.png";
import image3 from "@/public/images/theraphy-3.png";
import image4 from "@/public/images/theraphy-4.png";
import image5 from "@/public/images/theraphy-5.png";
import image6 from "@/public/images/theraphy-6.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

function Services() {
  const descriptions = [
    "Wellbeing",
    "Men",
    "Women",
    "Child",
    "Care",
    "Protection",
  ];

  return (
    <section className="py-[35px] sm:py-[50px]">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="swiper w-full"
        >
          {[image1, image2, image3, image4, image5, image6].map(
            (img, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="bg-[#defffc] w-full max-w-[103px] h-[103px] rounded-[50%] flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`therapy-${index + 1}`}
                    width={83}
                    height={83}
                    className="object-contain aspect-[1/1] p-[10px]"
                  />
                </div>
                <h4 className="text-base sm:text-lg text-[#424242] text-center">
                  {descriptions[index]}
                </h4>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Services;
