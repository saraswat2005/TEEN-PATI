import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ImageCarousel = ({ images }: { images: { src: string; link: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll(); 
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 1500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextImage = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsSliding(false), 500);
  };

  const prevImage = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsSliding(false), 500);
  };

  return (
    <div
      className="relative w-full h-64 flex items-center justify-center px-10 py-6 mt-10"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <button
        className="absolute left-10 bg-gray-900 p-3 rounded-full text-white shadow-lg z-10"
        onClick={prevImage}
      >
        <ChevronLeft size={28} />
      </button>

      <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              rel="noopener noreferrer"
              className="w-full h-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            >
              <img
                src={image.src}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      <button
        className="absolute right-10 bg-gray-900 p-3 rounded-full text-white shadow-lg z-10"
        onClick={nextImage}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};
