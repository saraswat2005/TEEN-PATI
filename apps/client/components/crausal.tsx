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

  // Add cloned items for infinite loop effect
  const items = [images[images.length - 1], ...images, images[0]];

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      jumpTo(1); // Jump to the first real image
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      jumpTo(items.length - 2); // Jump to the last real image
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const jumpTo = (index: number) => {
    setTransitionEnabled(false); // Disable transition for instant jump
    setCurrentIndex(index);
    setTimeout(() => {
      setTransitionEnabled(true); // Re-enable transition after jump
    }, 10);
  };

  const getTransform = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  const actualIndex = () => {
    if (currentIndex === 0) return images.length - 1; // Last image
    if (currentIndex === items.length - 1) return 0; // First image
    return currentIndex - 1; // Current image
  };

  return (
    <div className="relative overflow-hidden my-12 w-full mt-20 md:mt-10 lg:mt-10">
      {/* Carousel Container */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <div
          className={`flex ${
            transitionEnabled ? "transition-transform duration-500" : ""
          } ease-in-out`}
          style={{ transform: getTransform() }}
          role="list"
        >
          {items.map((src, index) => (
            <div
              key={index}
              className="min-w-full px-2 flex-shrink-0"
              role="listitem"
            >
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src={src as string}
                  alt={`Slide ${index}`}
                  fill
                  className="rounded-lg object-cover"
                  priority={index === 1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              actualIndex() === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-1/2 left-2 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
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