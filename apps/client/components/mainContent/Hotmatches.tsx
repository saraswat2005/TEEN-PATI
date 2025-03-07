import Link from "next/link";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HotMatchesProps {
  Img: string;
  leftText: string;
  rightText: string;
  images: { src: string; link: string; name: string }[];
}

export default function Matches({ Img, leftText, rightText, images }: HotMatchesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black p-6 w-full ml-auto relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white flex text-lg text-center items-center font-semibold">
            <img src={Img} alt="" width={30} className="mx-4" /> {leftText}
          </span>
        </div>
        <a href="#" className="text-gray-400 text-sm hover:text-white flex items-center space-x-1">
          <span>{rightText}</span>
          <span>→</span>
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-gray-900 text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <Link key={index} href={image.link} passHref>
              <div className="relative w-64 shrink-0 cursor-pointer group">
                {/* Game Image */}
                <img
                  src={image.src}
                  alt={`Match ${index + 1}`}
                  className="object-cover rounded-lg"
                />

                {/* Play Button Overlay with Hover Effect */}
                <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center opacity-2 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-3xl font-bold">▶</span>
                  </div>
                </div>

                {/* Game Name */}
                <div className="bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm rounded-b-lg">
                  {image.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-gray-900 text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}




export function MatchesForWhite({ leftText, rightText, images }: HotMatchesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#eff1f3] p-6 w-full ml-auto text-black relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-black flex text-lg text-center items-center font-semibold">
            {leftText}
          </span>
        </div>
        <a href="#" className="text-sm flex items-center space-x-1">
          <span>{rightText}</span>
          <span>→</span>
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-gray-900 text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <Link key={index} href={image.link} passHref>
              <div className="relative w-64 shrink-0 cursor-pointer group">
                {/* Game Image */}
                <img
                  src={image.src}
                  alt={`Match ${index + 1}`}
                  className="object-cover rounded-lg"
                />

                {/* Play Button Overlay with Hover Effect */}
                <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-70 flex items-center justify-center opacity-2 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-3xl font-bold">▶</span>
                  </div>
                </div>

                {/* Game Name */}
                <div className="bottom-0 left-0 w-full bg-[#eff1f3] bg-opacity-60 text-black text-center py-2 text-sm rounded-b-lg">
                  {image.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-gray-900 text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
