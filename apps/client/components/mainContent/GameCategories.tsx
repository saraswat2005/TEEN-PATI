


interface GameCategoriesProps {
    games: string[];
  }
  
  const GameCategories  = ({ games }: GameCategoriesProps) => {
    return (
        <div>
            <div className="flex overflow-x-auto gap-16 px-14 bg-black w-full ml-auto scrollbar-hide">
                {games.map((game, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                    <div className="w-16 h-16 bg-gray-800 rounded-full"></div>
                    <p className="mt-2 text-sm w-16 text-center">{game}</p>
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default GameCategories;
  