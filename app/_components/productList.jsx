"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart, setProducts } from "../_redux/store/productSlice";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  return (
    <section className="product-list py-[35px] sm:py-[50px]">
      <div className="container relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#184363] text-lg xs:text-2xl lg:text-2xl font-bold">
            Picked for you
          </h3>
          <div className="swiper-buttons flex gap-2">
            <button className="swiper-button-prev-custom">
              <IoIosArrowBack className="text-[#424242]" />
            </button>
            <button className="swiper-button-next-custom">
              <IoIosArrowForward className="text-[#424242]" />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={25}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="h-full w-full">
                <div className="relative w-full h-40 mb-4 bg-[#f6f5fa] rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h6 className="text-[12px] xs:text-sm mb-2 text-[#19DCC0] capitalize">
                  {product.category}
                </h6>
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-[#184363]">
                  {product.title.slice(0, 15)}
                </h4>
                <p className="text-[#184363] text-base sm:text-lg font-semibold mb-3">
                  ${product.price}
                </p>
                <button
                  onClick={() => addToCartHandler(product)}
                  className="bg-[#EDF4F6] text-[#184363] py-2 rounded-2xl mt-2 w-full element-center font-semibold flex items-center justify-center"
                >
                  <MdOutlineShoppingCart className="text-xl mr-1" />
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
