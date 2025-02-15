


const CardComponent = () => {
    return (
      <div className="flex justify-center gap-16 p-14 bg-black">
        <div className="relative w-full h-60 bg-gray-800 rounded-3xl flex items-center justify-center">
          <button className="absolute bottom-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md">
            GET NOW
          </button>
        </div>
  
        <div className="relative w-full h-60 bg-gray-800 rounded-3xl flex items-center justify-center">
          <button className="absolute bottom-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md">
            GET NOW
          </button>
        </div>
      </div>
    );
};
  
export default CardComponent;
  