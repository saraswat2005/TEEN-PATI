export function GifContainer() {
  const gifs = [
    "https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif",
    "https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif",
    "https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif",
    "https://tezcdn.io/casino/casino-highlight/evoplay-730-280.gif",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {gifs.map((gif, index) => (
        <img
          key={index}
          src={gif}
          alt={`GIF ${index + 1}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}

export function GifContainerTwo() {
  const gifs = [
    "https://www.fairplay1.club/assets/img/Banner/live-cards-banner.gif",
    "https://www.fairplay1.club/assets/img/Banner/live-casino-banner.gif",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {gifs.map((gif, index) => (
        <img
          key={index}
          src={gif}
          alt={`GIF ${index + 1}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
      ))}
    </div>
  );
}



export function GifContainerOne() {
    const gifs = [
      "https://www.fairplay1.club/assets/img/Banner/premium-new.gif",
    ];
  
    return (
      <div className="grid grid-cols-1 gap-4 p-4">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`GIF ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    );
}
  