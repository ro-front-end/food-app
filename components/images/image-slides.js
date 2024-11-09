"use client";

import { useEffect } from "react";
import { useState } from "react";

import Image from "next/image";

import burgerImg from "@/public/images/burger.jpg";
import curryImg from "@/public/images/curry.jpg";
import dumplingsImg from "@/public/images/dumplings.jpg";
import macncheeseImg from "@/public/images/macncheese.jpg";
import pizzaImg from "@/public/images/pizza.jpg";
import schnitzelImg from "@/public/images/schnitzel.jpg";
import tomatoSaladImg from "@/public/images/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juciy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and Chesse" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

function ImageSlides() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative">
      {images.map((image, index) => (
        <Image
          width={500}
          height={500}
          key={index}
          src={image.image}
          alt={image.alt}
          className={`${
            index === currentImageIndex ? "active-hero-image" : "hero-image"
          } rounded-full w-52 sm:w-52 md:w-96`}
        />
      ))}
    </section>
  );
}

export default ImageSlides;
