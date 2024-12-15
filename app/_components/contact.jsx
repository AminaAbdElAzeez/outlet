"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import image1 from "@/public/images/Monotone email.png";
import image2 from "@/public/images/Vector.png";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-[35px] sm:py-[50px]">
      <div className="container element-center flex-col">
        <h2 className="text-[#3D3D3D] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-[10px] text-center">
          Reach our <span className="text-[#03B89E]">Help Desk</span> for
          support
        </h2>
        <p className="text-[#8C8C8C] mb-[25px] text-sm md:text-base lg:text-lg xl:text-xl  text-center sm:text-left">
          Questions? Need assistance? Our dedicated support <br /> team is here
          to help you every step of the way:
        </p>
        <form
          className="element-center flex-col w-full sm:w-[360px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative mb-[15px] w-full">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter Your Email Address"
              className={`border-[1px] rounded-[15px] text-xs sm:text-base md:text-lg lg:text-xl p-[16px] w-full focus:outline-none mb-[5px] ${
                errors.email ? "border-red-500" : "border-[#03B89E]"
              }`}
            />
            <Image
              src={image1}
              alt="icon"
              className="absolute right-[15px] top-[12px] sm:top-[16px]"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] pl-[10px]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-[15px] w-full">
            <select
              {...register("problemType", {
                required: "Please select a problem type",
              })}
              className={`border-[1px] rounded-[15px] mb-[5px] p-[16px] pr-[30px] w-full focus:outline-none  text-[#8C8C8C] ${
                errors.problemType ? "border-red-500" : "border-[#03B89E]"
              }`}
            >
              <option
                value=""
                hidden
                className="text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Problem Type
              </option>
              <option value="1">Problem 1</option>
              <option value="2">Problem 2</option>
              <option value="3">Problem 3</option>
            </select>
            {errors.problemType && (
              <p className="text-red-500 text-[12px] pl-[10px]">
                {errors.problemType.message}
              </p>
            )}
          </div>

          <div className="mb-[15px] w-full ">
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
              placeholder="Write Message"
              className={`border-[1px] text-sm sm:text-base md:text-lg lg:text-xl focus:outline-none w-full rounded-[15px] p-[16px] ${
                errors.message ? "border-red-500" : "border-[#03B89E]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-[12px] pl-[10px]">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#03B89E] text-white element-center gap-[5px] text-[20px] py-[10px] px-[35px] rounded-[15px]"
          >
            Contact us <Image src={image2} alt="arrow" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
