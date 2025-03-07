interface GameCategoriesProps {
  games: string[];
}

const GameCategories = ({ games }: GameCategoriesProps) => {
  return (
    <div>
      <div className="flex overflow-x-auto gap-6 px-6 bg-[#eff1f3] w-full ml-auto">
        {games.map((game, index) => (
          <div key={index} className="flex flex-col items-center text-black">
            <div className="w-16 h-16 bg-gray-800 rounded-full"></div>
            <p className="mt-2 text-sm text-center">{game}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCategories;
