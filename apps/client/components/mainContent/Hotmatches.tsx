import Link from "next/link";

interface HotMatchesProps {
  Img: string;
  leftText: string;
  rightText: string;
  images: { src: string; link: string; name: string }[];
}

export default function Matches({ Img, leftText, rightText, images }: HotMatchesProps) {
  return (
    <div className="bg-black p-14 w-full ml-auto">
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

      <div className="overflow-x-auto scrollbar-hide">
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
    </div>
  );
}






export function MatchesForWhite({ Img, leftText, rightText, images }: HotMatchesProps) {
  return (
    <div className="bg-[#eff1f3] p-14 w-full ml-auto text-black">
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

      <div className="overflow-x-auto scrollbar-hide">
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
    </div>
  );
}
