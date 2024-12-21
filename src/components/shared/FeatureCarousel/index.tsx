"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const features = [
    { id: 1, name: "Remove BG", color: "bg-cyan-500", src: "/icons/remover.webp" },
    { id: 2, name: "Face-to-Sticker", color: "bg-rose-500", src: "/icons/sticker.webp" },
    { id: 3, name: "Colorizer", color: "bg-pink-500", src: "/icons/color-palette.webp" },
    { id: 4, name: "Text-to-Image", color: "bg-green-500", src: "/icons/text-to-image.webp" },
    { id: 5, name: "Text-to-Image", color: "bg-green-500", src: "/icons/artificial-intelligence.webp" },
];

export default function FeatureCarousel() {
    return (
        <div className="w-full max-w-screen-lg mx-auto py-6">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="cursor-grab"
            >
                <CarouselContent className="-ml-4">
                    {features.map((feature) => (
                        <CarouselItem
                            key={feature.id}
                            className="basis-1/4 pl-4"
                        >
                            <>
                                <div
                                    className={`w-20 h-20 rounded-full flex flex-col items-center justify-center ${feature.color} mx-auto`}
                                >
                                    <Image src={feature.src} alt={feature.name} className="object-center" width={40} height={40}/>
                                </div>
                                <p className="text-black text-sm mt-2 text-center">{feature.name}</p>

                            </>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
