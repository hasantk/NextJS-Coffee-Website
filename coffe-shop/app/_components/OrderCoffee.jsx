import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OrderCoffee = () => {
  return (
    <>
      <div className="bg-gray-50 md:py-16 md:my-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div
              className=""
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
              data-aos="fade-up"
            >
              <Image
                src="/coffee/coffee-mid.png"
                width={600}
                height={600}
                className="object-cover md:w-full"
              />
            </div>
            <div
              className="md:pe-40 py-10 md:py-0"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
              data-aos="fade-down"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Order Your Favorite Coffee
              </h1>
              <p className=" text-gray-500 text-lg py-4 md:py-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam voluptatibus beatae nam eligendi veritatis tempora,
                distinctio magni minima provident repudiandae, illum error
                tenetur! Obcaecati, et.
              </p>
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCoffee;
