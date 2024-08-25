import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Explore = () => {
  return (
    <>
      <div className="">
        <div className="container py-20">
          {/*********************************/}
          <div className="grid md:grid-cols-6 text-center md:py-16">
            <div className="md:col-start-2 col-span-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Explore Our Alowishus
              </h1>
              <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is
              </p>
            </div>
          </div>
          {/*********************************/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 md:w-4/5 mx-auto">
            {/*********************************/}
            <div
              className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
              data-aos="fade-left"
            >
              <h1 className="text-3xl font-semibold text-gray-700">
                Our Catering
              </h1>
              <p className="py-2 text-gray-500 text-lg">
                Contrary to popular belief, Lorem Ipsum is not.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon1.png"
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Order Cathering
                </Button>
              </div>
            </div>
            {/*********************************/}
            <div
              className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
              data-aos="fade-left"
            >
              <h1 className="text-3xl font-semibold text-gray-700">The Food</h1>
              <p className="py-2 text-gray-500 text-lg">
                Contrary to popular belief, Lorem Ipsum is not.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon2.png"
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Food Menu
                </Button>
              </div>
            </div>
            {/*********************************/}
            <div
              className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
              data-aos="fade-left"
            >
              <h1 className="text-3xl font-semibold text-gray-700">
                The Getlado
              </h1>
              <p className="py-2 text-gray-500 text-lg">
                Contrary to popular belief, Lorem Ipsum is not.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon3.png"
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Discover More
                </Button>
              </div>
            </div>
          </div>
          {/*********************************/}
        </div>
      </div>
    </>
  );
};

export default Explore;
