"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

// Demo slides (3)
const slides = [
    { id: 0, theme: "#f7b54c", badgeBg: "#25614c", badgeText: "#fff", price: "$12", rating: "(4.8)", sweetText: "sweeee \n eeeeet!", sideText: "freshly crafted treats, made just for you", img: "/images/icon1.webp", hero: "/images/hero1.webp"},
    { id: 1, theme: "#e89d34", badgeBg: "#25614c", badgeText: "#fff", price: "$10", rating: "(4.3)", sweetText: "deelici \n ousss!", sideText: "Sweet creations, crafted to perfection", img: "/images/icon2.webp", hero: "/images/hero2.webp" },
    { id: 2, theme: "#a95d31", badgeBg: "#25614c", badgeText: "#fff", price: "$14", rating: "(4.0)", sweetText: "taaass \n sstty!", sideText: "Handmade delights, baked with love for you", img: "/images/icon3.webp", hero: "/images/hero3.webp" },
];

function SweetCard({ slide, controls }) {
    return (
        <div
            className="relative flex flex-col justify-between rounded-[2rem] overflow-hidden p-5 md:p-10 md:h-[65vh]"
            style={{ backgroundColor: slide.theme }}
        >
            <div className="relative flex-1">
                <h2 className="absolute inset-0 flex flex-col items-center justify-center text-[22vw] md:text-[10vw] font-extrabold leading-none uppercase text-white tracking-wider text-center">
                    {slide.sweetText}
                </h2>

                <Image
                    src="/images/splash.webp"
                    alt="splash"
                    width={100}
                    height={100}
                    className="absolute top-9 md:top-5 right-[77%] rotate-180 z-10"
                />

                <div className="relative z-20 flex justify-center">
                    <Image
                        src= {slide.hero}
                        alt="cookies"
                        width={300}
                        height={300}
                        className="max-w-[230px] md:max-w-[300px]"
                    />
                </div>

                <div
                    className="flex items-center justify-center absolute top-1/2 right-[36%] md:right-[46%] -translate-y-1/2 w-[7.5rem] h-[5rem] rounded-br-full rounded-tl-full z-20"
                    style={{ backgroundColor: slide.badgeBg }}
                >
                    <h4
                        className="flex flex-col items-center text-lg font-light uppercase leading-5"
                        style={{ color: slide.badgeText }}
                    >
                        from <span className="text-3xl font-extrabold">{slide.price}</span>
                    </h4>
                </div>
            </div>

            <div className="flex items-center justify-between w-full text-[#fff] mt-6 z-20">
                <p className="max-w-[15ch] md:max-w-[22ch] text-base md:text-lg capitalize">
                    {slide.sideText}
                </p>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-4xl font-bold">{slide.rating}</span>
                    <span className="text-base md:text-lg text-center">since 1985</span>
                </div>

                {/* cookie thumbnails as “dots” */}
                {controls}
            </div>
        </div>
    );
}

export default function CardCarousel() {
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        api.on("select", onSelect);
        setCurrent(api.selectedScrollSnap());
        return () => api.off("select", onSelect);
    }, [api]);

    const Controls = () => (
        <div className="hidden md:flex items-center justify-center gap-2 ml-2 md:ml-0">
            {slides.map((s, i) => (
                <button
                    key={s.id}
                    type="button"
                    onClick={() => api && api.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`bg-[#ffc66b] rounded-[10px] md:rounded-[20px] px-2 py-3 border transition ${current === i ? "border-white scale-105" : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                >
                    <Image src={s.img} width={40} height={40} alt={`cookie ${i + 1}`} />
                </button>
            ))}
        </div>
    );

    return (
        <Carousel setApi={setApi} opts={{ align: "center" }} className="w-full">
            <CarouselContent>
                {slides.map((slide) => (
                    <CarouselItem key={slide.id} className="basis-full">
                        <Card className="py-0 border-0 shadow-xl rounded-3xl overflow-hidden">
                            <CardContent className="p-0">
                                <SweetCard slide={slide} controls={<Controls />} />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}