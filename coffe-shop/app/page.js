"use client";
import { useEffect } from "react";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Header from "./_components/Header";
import InstantCoffee from "./_components/InstantCoffee";
import OrderCoffee from "./_components/OrderCoffee";
import SellingCoffee from "./_components/SellingCoffee";
import Testimonial from "./_components/Testimonial";
import Footer from "./_components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <>
    <Header />
    <Banner/>
    <Explore/>
    <OrderCoffee/>
    <SellingCoffee/>
    <InstantCoffee/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
