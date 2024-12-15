"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <section className="ml-[10px] xs:ml-[15px] md:ml-0 py-[35px] sm:py-[50px]">
      <div className="slider flex justify-between items-center gap-[35px] flex-col md:flex-row">
        <Swiper
          slidesPerView={2}
          spaceBetween={25}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
            type: "bullets",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="swiper w-full"
        >
          <SwiperSlide>
            <div className="bg-[url('/images/div.banner-back-1.png')] w-full h-[272px] bg-cover bg-center rounded-md flex flex-col justify-center p-[25px] text-[#184363] aspect-w-16 aspect-h-9 max-w-full max-h-full">
              <h6 className="text-[12px] xs:text-sm mb-2 sm:mb-4">
                From 9.99 SAR
              </h6>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-1">
                Covid 19 pack
              </h4>
              <p className="text-[20px] sm:text-[25px]">
                Get it now
                <br />
                45% Off
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/images/div.banner-back-2.png')] w-full h-[272px] bg-cover bg-center rounded-md flex flex-col justify-center p-[25px] text-[#184363] aspect-w-16 aspect-h-9 max-w-full max-h-full">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-1">
                Breathable
              </h4>
              <p className="text-[20px] sm:text-[25px]">Face Mask</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/images/div.banner-back-1.png')] w-full h-[272px] bg-cover bg-center rounded-md flex flex-col justify-center p-[25px] text-[#184363] aspect-w-16 aspect-h-9 max-w-full max-h-full">
              <h6 className="text-[12px] xs:text-sm mb-2 sm:mb-4">
                From 9.99 SAR
              </h6>
              <h4 className="text-2xl sm:text-3xl font-semibold mb-1">
                Covid 19 pack
              </h4>
              <p className="text-[20px] sm:text-[25px]">
                Get it now
                <br />
                45% Off
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/images/div.banner-back-2.png')] w-full h-[272px] bg-cover bg-center rounded-md flex flex-col justify-center px-[45px] text-[#184363] aspect-w-16 aspect-h-9 max-w-full max-h-full">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-1">
                Breathable
              </h4>
              <p className="text-[20px] sm:text-[25px]">Face Mask</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
