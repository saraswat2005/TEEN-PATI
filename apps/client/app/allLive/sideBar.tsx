"use client"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";

const Sidebars = () => {
  const [isCricketOpen, setIsCricketOpen] = useState(true);
  const [isKabaddiOpen, setIsKabaddiOpen] = useState(true);
  const [isFootballOpen, setIsFootballOpen] = useState(true);
  const [isTableTennisOpen, setIsTableTennisOpen] = useState(true);
  const [isBasketBallOpen, setIsBasketBallOpen] = useState(true);
  const [isTennisOpen, setIsTennisOpen] = useState(true);
  const [isVolleyBallOpen, setIsVolleyBallOpen] = useState(true);

  const cricketTournaments = [
    "Virtual Cricket. VSL. Asia Cup (1 over)",
    "Virtual Cricket. VSL. BBL (1 over)",
    "Virtual Cricket. VSL. World Legends (1 over)",
    "Virtual Cricket. VSL. IPL (1 over)",
    "Virtual Cricket. QUANTUM. IPL 2025",
    "Virtual Cricket. QUANTUM. Fast 5 International 2025",
    "India. T20 Guwahati Premier League",
    "India. Chandigarh T20 League",
    "India. Ranji Trophy",
    "India. Amateur League T10",
    "Pakistan. Karachi Challenge Cup",
    "Zimbabwe. Logan Cup",
    "India. Women. Agra Distict League",
    "ECricket. IPL (10 overs)",
    "Virtual Cricket. QUANTUM. LPL 2025",
    "Virtual Cricket. QUANTUM. WPL 2025",
  ];

  const FootballTournament = [
    "Virtual football. VSL. Penalties World League",
    "Virtual football. VSL. Chile. Primera Division (2x15 mins)",
    "Virtual football. VSL. India. Super League (2x15 mins)",
    "Virtual football. VSL. Spain. La Liga (2x15 mins)",
    "Virtual football. VSL. Peru. Liga 1 (2x15 mins)",
    "Virtual football. VSL. England. Premier League (2x15 mins)",
    "Virtual football. VSL. Brazil. Serie A (2x15 mins)",
    "E-Football. ESportsBattle. Volta FA Cup 4x4 (2x3 mins)",
    "E-Football. ESportsBattle. La Liga (2x4 mins)",
    "E-Football. ESportsBattle. International-1 (2x4 mins)",
    "E-Football. ESportsBattle. RSL (2x6 mins)",
    "India. I-League. Division 2",
    "E-Football. Virtual eComp. International (2x4 mins)",
    "E-Football. Virtual eComp. Asian Champions League (2x4 mins)",
  ];

  const KabaddiTournaments = ["Virtual kabaddi. QUANTUM. KPL"];

  const tableTennisTournaments = [
    "Ukraine. Men. Setka Cup",
    "Czech Republic. Men. Setka Cup",
    "Czech Republic. Men. TT-Cup",
    "World. Men. TT Star Series",
    "Czech Republic. Men. Liga Pro",
    "Poland. Men. Elite Series",
  ];

  const BasketBallTournament = [
    "Ukraine. BSKT CUP",
    "Chinese Taipei. Women. HBL",
    "Kazakhstan. Women. National League",
    "E-Basketball. ESportsBattle E-Basketball (format 4x5 mins, OT-3 mins)",
    "E-Basketball. ESportsBattle E-Basketball (format 4x8 mins, OT-4 mins)",
  ];

  const tennisTournaments = [
    "Ukraine. Men. GTR Cup (No-Ad scoring, 3rd set Super Tie break)",
    "ATP Challenger. New Delhi. Hard",
    "ITF. Women. Antalya. Clay. Qualifying",
    "UTR Pro. Men. Dubai. Hard",
    "UTR Pro. Men. Olomouc. Carpet",
    "UTR Pro. Women. Bucharest. Clay",
  ];

const volleyBallTournaments = [
  "Nepal. Regional Cup",
  "Kyrgyzstan. Women. Championship",
]

  return (
    <div className="bg-white hidden lg:block w-72 min-h-screen p-4">
      <h2 className="text-sm font-light">All Tournaments</h2>

      {/* Cricket Section */}
      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* Cricket Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsCricketOpen(!isCricketOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🏏</span>
            <h3 className="font-medium text-gray-800">Cricket</h3>
          </div>
          <span>{isCricketOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* Cricket Tournament List */}
        {isCricketOpen && (
          <ul className="mt-2">
            {cricketTournaments.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* kabaddi tournaments  */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* kabaddi Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsKabaddiOpen(!isKabaddiOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🤼</span>
            <h3 className="font-medium text-gray-800">Kabaddi</h3>
          </div>
          <span>{isKabaddiOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* kabaddi Tournament List */}
        {isKabaddiOpen && (
          <ul className="mt-2">
            {KabaddiTournaments.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* football tounament list  */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* football Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsFootballOpen(!isFootballOpen)}
        >
          <div className="flex items-center gap-2">
            <span>⚽</span>
            <h3 className="font-medium text-gray-800">FootBall</h3>
          </div>
          <span>{isFootballOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* football Tournament List */}
        {isFootballOpen && (
          <ul className="mt-2">
            {FootballTournament.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* tennis tounament list  */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* football Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsTableTennisOpen(!isTableTennisOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🏓</span>
            <h3 className="font-medium text-gray-800">Table Tennis</h3>
          </div>
          <span>{isTableTennisOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* football Tournament List */}
        {isTableTennisOpen && (
          <ul className="mt-2">
            {tableTennisTournaments.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* baketball tournament  */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* basketBall Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsBasketBallOpen(!isBasketBallOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🏀</span>
            <h3 className="font-medium text-gray-800">Basket Ball</h3>
          </div>
          <span>{isBasketBallOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* football Tournament List */}
        {isBasketBallOpen && (
          <ul className="mt-2">
            {BasketBallTournament.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* tennis tournament \ */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* Tennis Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsTennisOpen(!isTennisOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🎾</span>
            <h3 className="font-medium text-gray-800">Tennis</h3>
          </div>
          <span>{isTennisOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* Tennis Tournament List */}
        {isTennisOpen && (
          <ul className="mt-2">
            {tennisTournaments.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* volleyball tournament  */}

      <div className="mt-4 bg-zinc-200 p-3 rounded-lg shadow">
        {/* volleyball Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsVolleyBallOpen(!isVolleyBallOpen)}
        >
          <div className="flex items-center gap-2">
            <span>🏐</span>
            <h3 className="font-medium text-gray-800">VolleyBall</h3>
          </div>
          <span>{isVolleyBallOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </div>

        {/* Tennis Tournament List */}
        {isVolleyBallOpen && (
          <ul className="mt-2">
            {volleyBallTournaments.map((tournament, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-1"
              >
                <span className="text-sm">{tournament}</span>
                <input type="checkbox" className="h-5 w-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Sidebars;
