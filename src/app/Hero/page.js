import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CardCarousel from './CardCarousel';
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  const picks = [
  {
    id: 1,
    name: "Honey Bun",
    desc: "fluffy bun with sweet honey glaze",
    price: 4.99,
    img: "/images/hon_bun.png",
  },
  {
    id: 2,
    name: "Melon Bun",
    desc: "light bun with smooth melon feeling",
    price: 5.5,
    img: "/images/bun.png",
  },
  {
    id: 3,
    name: "Chocolate Bun",
    desc: "Loaded with chocolate chips",
    price: 4.0,
    img: "/images/choco_bun.png",
  },
];
  return (
    <div className="py-10 px-2.5 md:px-10">
      <div className="flex flex-col md:flex-row items-stretch gap-5 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-5 w-full md:w-3/4">
          {/* Top Left Box */}
          <CardCarousel/>

          {/* Bottom Left Box */}
          <div className="bg-white rounded-[2rem] flex flex-col md:flex-row items-start justify-baseline md:gap-30 w-full h-full p-5 md:p-10">
            <h4 className="md:max-w-[5ch] md:flex-3/10 text-4xl md:text-[60px] font-extrabold uppercase md:leading-14 pb-5 md:pb-0">
              Top-3 Picks
            </h4>
            <ul className="flex md:flex-7/10 flex-col items-center justify-between gap-5">
              {picks.map((item) => (
                <li key={item.id} className="w-full flex items-center justify-between gap-5 md:gap-10">
                  <div className="flex items-center justify-stasrt gap-2 md:gap-5 pr-10">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.name}
                      className="rounded-2xl bg-[#85b8d8] px-2 py-2.5"
                    />
                    <h5 className="max-w-[5ch] font-bold text-lg md:text-xl">{item.name}</h5>
                  </div>
                    <p className="max-w-[20ch] text-center md:text-left text-base md:text-lg text-gray-600">{item.desc}</p>
                    <span className="flex flex-col items-start font-bold">${item.price.toFixed(2)}
                      <span className="md:text-lg">each</span>
                    </span>
                    <button className="bg-[#25614d] text-[#fff] md:text-xl font-medium hover:text-[#ebb560] hover:scale-110 transition rounded-2xl p-2">
                      <FaPlus/>
                    </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5 w-full md:w-1/4">

          {/* School Box */}
          <div className="relative flex flex-col items-center justify-between bg-[#89bee1] rounded-[2rem] text-center py-5 px-4 h-[40vh]">
            <h4 className="flex flex-col items-center text-[3rem] font-bold leading-tight uppercase">
              School
              <span className="text-xl font-medium capitalize md:mt-2">
                Learn to bake deliciously
              </span>
            </h4>
            <div className="flex items-center gap-2.5 z-10 mt-4">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-[#0d1116] text-[#ebb560] text-lg font-bold rounded-full px-8 py-3 uppercase"
              >
                explore
              </Link>
              <span className="bg-[#ebb560] rounded-[20px] p-3">
                <Image
                  src="/images/rolling_pin.png"
                  width={30}
                  height={30}
                  alt="rolling pin"
                />
              </span>
            </div>
            <Image
              src="/images/baker.png"
              className="max-w-[240px] md:max-w-[260px] absolute bottom-0 left-1/2 -translate-x-1/2"
              width={260}
              height={260}
              alt="baker"
            />
            <Image
              src="/images/join.png"
              className="absolute top-1/3 left-1/5 md:left-1/4 -rotate-12"
              width={70}
              height={70}
              alt="join now"
            />
          </div>

          {/* Everyday Box */}
          <div className="relative flex flex-col items-center justify-between bg-[#ee9457] rounded-[2rem] text-center capitalize pt-5 pb-10 px-4 md:-[60vh]">
            <h4 className="flex flex-col items-center text-[3rem] font-bold uppercase">
              everyday
            </h4>
            <Image
              src="/images/tart.png"
              width={250}
              height={250}
              alt="fruit tart"
            />
            <p className="max-w-[24ch] text-lg font-medium text-center">
              Freshly baked, delivered daily right to your door!
            </p>
            <Image
              src="/images/splash.png"
              className="absolute bottom-1/3 right-12 md:right-20 -rotate-10"
              width={60}
              height={60}
              alt="splash"
            />
            <span className="bg-[#22614a] text-[#f2b961] text-xl font-bold rounded-bl-[50px] rounded-tr-[50px] px-6 py-2 absolute top-2/4 right-10 md:right-20 -translate-y-1/2 -rotate-20">
              $10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
