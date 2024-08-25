"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

//import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          //navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-16">
              {/*******************************************/}
              <div className="grid md:grid-cols-2">
                {/*******************************************/}
                <div className="relative">
                  {/*******************************************/}
                  <h1
                    className="md:text-8xl text-5xl font-bold py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Alowishus Delicious Coffee{" "}
                  </h1>
                  <div
                    className="absolute top-56 mt-1 right-56 md:flex hidden"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <Image src="/coffee/cafe.png" width={80} height={80} />
                  </div>
                  <p
                    className="py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    vehicula, odio at luctus.
                  </p>
                  {/*******************************************/}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      Downloand App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  {/*******************************************/}
                </div>
                {/*******************************************/}
                <div
                  className="relative md:py-0 py-16"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out-back"
                  data-aos="fade-left"
                >
                  <Image src="/coffee/hero1.png" width={600} height={600} />
                  <div className="absolute top-0 md:top-10 right-0 md:right-24">
                    <Image
                      src="/coffee/cafe.png"
                      width={120}
                      height={120}
                      className="md:w-28 w-16"
                    />
                  </div>
                </div>
                {/*******************************************/}
              </div>
              {/*******************************************/}
            </div>
          </SwiperSlide>
          {/*******************************************/}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-10">
              {/*******************************************/}
              <div className="grid md:grid-cols-2">
                {/*******************************************/}
                <div className="relative">
                  {/*******************************************/}
                  <h1 className="md:text-8xl text-5xl font-bold py-4">
                    Alowishus Delicious Coffee{" "}
                  </h1>
                  <div className="absolute top-56 mt-1 right-56 md:flex hidden">
                    <Image src="/coffee/cafe.png" width={80} height={80} />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    vehicula, odio at luctus.
                  </p>
                  {/*******************************************/}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Downloand App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  {/*******************************************/}
                </div>
                {/*******************************************/}
                <div className="relative">
                  <Image
                    src="/coffee/alowishus-coffee.png"
                    width={600}
                    height={600}
                  />
                  <div className="absolute top-10 md:top-4 right-0 md:right-24">
                    <Image
                      src="/coffee/cafe.png"
                      width={120}
                      height={120}
                      className="md:w-28 w-16"
                    />
                  </div>
                </div>
                {/*******************************************/}
              </div>
              {/*******************************************/}
            </div>
          </SwiperSlide>
          {/*******************************************/}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
