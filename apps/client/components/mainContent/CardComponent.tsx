import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/e3d3eb4d-8b6e-4a09-bb9c-72ee4bf48d2a.avif", link: "/match/1", name: "Super Over" },
  { src: "/e3d3eb4d-8b6e-4a09-bb9c-72ee4bf48d2a.avif", link: "/match/2", name: "Race 20" },
  { src: "/e3d3eb4d-8b6e-4a09-bb9c-72ee4bf48d2a.avif", link: "/match/3", name: "Battle Royale" },
  { src: "/e3d3eb4d-8b6e-4a09-bb9c-72ee4bf48d2a.avif", link: "/match/4", name: "Ultimate Showdown" },
];

const CardComponent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-white text-white cursor-pointer"
      >
        <ChevronLeft size={24} color="black"/>
      </button>

      {/* Scrollable X Container */}
      <div ref={scrollRef} className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth">
        <div className="flex space-x-6 px-2 py-2">
          {images.map((image, index) => (
            <Link key={index} href={image.link} passHref>
              <div className="relative cursor-pointer flex-shrink-0 min-w-[350px] max-w-[350px] md:min-w-[600px] md:max-w-[600px]">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 z-10 p-2 bg-gray-800/70 rounded-full shadow-md hover:bg-white text-white cursor-pointer"
      >
        <ChevronRight size={24} color="black"/>
      </button>
    </div>
  );
};

export default CardComponent;
