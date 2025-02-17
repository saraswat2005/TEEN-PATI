"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/sports1.png",
  "/sports1.png",
  "/sports1.png",
  "/sports1.png",
  "/sports1.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const items = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      jumpTo(1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      jumpTo(items.length - 2);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const jumpTo = (index: number) => {
    setTransitionEnabled(false);
    setCurrentIndex(index);
    setTimeout(() => {
      setTransitionEnabled(true);
    }, 10);
  };

  const getTransform = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  const actualIndex = () => {
    if (currentIndex === 0) return images.length - 1;
    if (currentIndex === items.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className="relative items-center overflow-hidden my-12">
      <div className="relative h-56 md:h-96">
        <div
          className={`flex ${
            transitionEnabled ? "transition-transform duration-500" : ""
          } ease-in-out`}
          style={{ transform: getTransform() }}
        >
          {items.map((src, index) => (
            <div
              key={index}
              className="min-w-full px-2 flex-shrink-0"
            >
              <div className="relative md:h-96">
                <Image
                  src={src as string}
                  alt={`Slide ${index}`}
                  fill
                  className="rounded-lg"
                  priority={index === 1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              actualIndex() === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}