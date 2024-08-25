"use client";

import { useState } from "react";
{
  /************************** headlessui *****************************/
}
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
{
  /*************************** heroicons ****************************/
}
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

{
  /************************** Products *****************************/
}
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
{
  /*************************** callsToAction ****************************/
}
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
{
  /************************** Header Start *****************************/
}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <header className=" container">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between py-6"
        >
          {/*******************************************************/}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/coffee/logo.png"
                className=""
                width={120}
                height={80}
              />
            </a>
          </div>
          {/*******************************************************/}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          {/*******************************************************/}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-out-back"
            >
              Cafe Menu
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out-back"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-out-back"
            >
              Find Us
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-6 text-gray-900"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-easing="ease-out-back"
            >
              Allowishus Catering
            </a>
          </PopoverGroup>
          {/*******************************************************/}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <ShoppingBagIcon
                width={35}
                className="hover:cursor-pointer bg-gray-50 hover:bg-gray-100 p-2 rounded-full shadow-lg shadow-gray-300 hover:scale-105 transition-all"
              />
            </a>
            <Button
              className={
                "bg-gray-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-all"
              }
            >
              Buy Gift Vouchers
            </Button>
          </div>
          {/*******************************************************/}
        </nav>
        {/*******************************************************/}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        {/*******************************************************/}
      </header>
    </div>
  );
};
{
  /*******************************************************/
}
export default Header;
