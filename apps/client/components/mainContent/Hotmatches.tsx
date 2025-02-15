

interface HotMatchesProps {
  Img: string;
  leftText: string;
  rightText: string; 
}


export default function Matches({Img, leftText, rightText}: HotMatchesProps) {
    return (
      <div className="bg-black p-14 w-full ml-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-white flex text-lg text-center items-center font-semibold"><img src={Img} alt="" width={30} className=" mx-4"/> {leftText}</span>
          </div>
          <a href="#" className="text-gray-400 text-sm hover:text-white flex items-center space-x-1">
            <span>{rightText}</span>
            <span>→</span>
          </a>
        </div>
  
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4">
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
            <div className="w-96 h-44 bg-gray-800 rounded-lg shrink-0"></div>
          </div>
        </div>
      </div>
    );
}