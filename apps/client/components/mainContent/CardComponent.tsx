

import React, { useState, useEffect } from 'react';

const CardComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      content: (
        <div className="relative w-full h-60 bg-gray-800 rounded-3xl flex items-center justify-center">
          <button className="absolute bottom-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md">
            GET NOW
          </button>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="relative w-full h-60 bg-gray-800 rounded-3xl flex items-center justify-center">
          <button className="absolute bottom-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md">
            GET NOW
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, [cards.length]);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-16 p-14 bg-black">
      <div className="md:hidden w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={card.id} className="w-full flex-shrink-0">
              {card.content}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-16 w-full">
        {cards.map((card) => (
          <div key={card.id} className="w-full">
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;