// import { IoArrowBack, IoArrowBackCircleSharp } from "react-icons/io5";

// const promotions = [
//   {
//     id: 1,
//     category: "Sports",
//     timeLeft: "10H 16M LEFT",
//     title: "Happy Midweek: Get Freebet Up To ₹1000",
//     description: "Activate Bonus",
//     amount: "₹800 or ₹1,000 Freebet?",
//     image: "/images/sports-promo.png",
//   },
//   {
//     id: 2,
//     category: "Casino",
//     timeLeft: "1D LEFT",
//     title: "Hot Spins Tournament",
//     description: "Prize pool",
//     amount: "₹2,70,000",
//     image: "/images/casino-promo.png",
//   },
//   {
//     id: 3,
//     category: "Casino",
//     timeLeft: "1D LEFT",
//     title: "Divine Royal Tournament",
//     description: "Join Now",
//     amount: "Prize pool ₹38,00,000",
//     image: "/images/royal-tournament.png",
//   },
//   {
//     id: 4,
//     category: "Sports",
//     timeLeft: "2D LEFT",
//     title: "Women’s T20 League: FREE ₹700 for you",
//     description: "Spin and win",
//     amount: "1 of 7 prizes",
//     image: "/images/t20-league.png",
//   },
// ];

// export default function Promotions() {
//   return (
//     <div className="bg-black text-white min-h-screen p-4">
//       {/* Header */}
//       <div className="flex items-center gap-4 mb-4">
//         <IoArrowBackCircleSharp />
//         <h1 className="text-xl font-bold">Promotions</h1>
//       </div>

//       {/* Promo Options */}
//       <div className="flex gap-6 bg-gray-900 p-4 rounded-lg mb-6">
//         <div className="flex flex-col items-center">
//           <img
//             src="/images/bonus-history.png"
//             className="w-12 h-12"
//             alt="Bonus"
//           />
//           <span className="text-sm">Bonus history</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <img
//             src="/images/promo-code.png"
//             className="w-12 h-12"
//             alt="Promo Code"
//           />
//           <span className="text-sm">Promo code</span>
//         </div>
//       </div>

//       {/* Promotions List */}
//       <div className="bg-gray-900 p-4 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Promotions</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {promotions.map((promo) => (
//             <div
//               key={promo.id}
//               className="bg-gray-800 p-4 rounded-lg flex flex-col gap-2"
//             >
//               <div className="flex items-center gap-2">
//                 <span
//                   className={`px-2 py-1 text-xs font-bold rounded bg-${promo.category === "Sports" ? "blue" : "pink"}-600`}
//                 >
//                   {promo.category}
//                 </span>
//                 <span className="text-xs text-green-400">{promo.timeLeft}</span>
//               </div>
//               <h3 className="text-white font-bold">{promo.title}</h3>
//               <img
//                 src={promo.image}
//                 className="w-full h-32 object-cover rounded-lg"
//                 alt={promo.title}
//               />
//               <p className="text-sm text-gray-300">{promo.description}</p>
//               <p className="text-yellow-400 font-semibold">{promo.amount}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Topbar from "../../components/Topbar";
import { Filter } from "lucide-react";

const Promotions = () => {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="bg-stone-800 min-h-screen flex flex-col items-center p-4 text-white">
        {/* Header Section */}
        <div className="bg-[#191919] w-full max-w-2xl rounded-2xl mt-4 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button className="text-lg">&larr;</button>
            <h1 className="text-xl font-bold">Promotions</h1>
            <div></div> {/* Empty div for spacing */}
          </div>
          <div className="flex  gap-2.5">
            <div className="flex flex-col">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/bonushistory.png"
                  alt="Bonus"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-sm text-gray-400">Bonus history</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/promocode.png"
                  alt="Promo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-sm text-gray-400">Promo code</span>
            </div>
          </div>
        </div>

        {/* Promotions List */}
        <div className="bg-[#191919] w-full max-w-2xl mt-6 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Promotions</h2>
            <Filter className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Promotion Item */}
            <div className="bg-[#242424] rounded-lg p-3 relative">
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                Sports
              </span>
              <span className="text-xs text-green-400 absolute right-2 top-2">
                10H 16M LEFT
              </span>
              <h3 className="text-white font-bold mt-2">
                Happy Midweek: Get Freebet Up To ₹1000
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Activate Bonus ₹800 or ₹1,000 Freebet?
              </p>
            </div>

            {/* Promotion Item */}
            <div className="bg-[#242424] rounded-lg p-3 relative">
              <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                Casino
              </span>
              <span className="text-xs text-green-400 absolute right-2 top-2">
                1D LEFT
              </span>
              <h3 className="text-white font-bold mt-2">
                Hot Spins Tournament
              </h3>
              <p className="text-gray-400 text-sm mt-1">₹2,70,000 Prize pool</p>
            </div>

            {/* More Promotions */}
            <div className="bg-[#242424] rounded-lg p-3 relative">
              <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                Casino
              </span>
              <span className="text-xs text-green-400 absolute right-2 top-2">
                1D LEFT
              </span>
              <h3 className="text-white font-bold mt-2">
                Divine Royal Tournament
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Join Now Prize pool ₹38,00,000
              </p>
            </div>

            <div className="bg-[#242424] rounded-lg p-3 relative">
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                Sports
              </span>
              <span className="text-xs text-green-400 absolute right-2 top-2">
                2D LEFT
              </span>
              <h3 className="text-white font-bold mt-2">
                Women’s T20 League: FREE ₹700 for you
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Spin and win 1 of 7 prizes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
