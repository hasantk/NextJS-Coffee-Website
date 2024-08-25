"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <>
      <div className="container py-20 px-4">
        <div className="grid md:grid-cols-6 text-center md:py-10">
          <div className="col-start-2 col-span-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Client Testimonial
            </h1>
            <p className="py-4 w-2/4 mx-auto text-gray-500 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is
            </p>
            {/*********************************************************************************************************/}
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </div>
              <div className="boder-none sm:border-l-2 border-black sm:pl-8">
                <div className="flex justify-center sm:justify-start items-center">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>

                  <Star width={20} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-sm">Rated by 25k on google.</h3>
                </div>
              </div>
            </div>
            {/*********************************************************************************************************/}
          </div>
        </div>
        <div className="md:flex hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/****************************/}
        <div className="md:hidden flex pt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper md:hidden block"
          >
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-md  bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-gray-500 text-lg pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam voluptatibus beatae nam eligendi veritatis
                    tempora, distinctio magni minima provident repudiandae,
                    illum error tenetur! Obcaecati, et.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/****************************/}
      </div>
    </>
  );
};

export default Testimonial;
