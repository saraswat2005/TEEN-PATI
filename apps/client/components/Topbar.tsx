

export default function Topbar(){
    return <div className="bg-black flex justify-evenly text-white py-6 border-b-1">
        <div className="text-3xl text-amber-400">
            LOGO
        </div>
        <div className="flex justify-center items-center gap-x-14 bg-black text-white py-2 text-sm">
            <div className="flex items-center gap-x-2">
                <img src="LiveEvents.png" alt="Live Events" />
                <div>Live Events</div>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="upcomingEvents.png" alt="Upcoming Events" />
                <div>Upcoming Events</div>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="promotions.png" alt="Promotions" />
                <div>Promotions</div>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="instantGames.png" alt="Instant Games" />
                <div>Instant Games</div>
            </div>
        </div>
        <div className="flex gap-x-4">
            <div className="px-8 py-3 text-white font-bold bg-cyan-950 rounded-4xl">
                Log In
            </div>
            <div className="px-8 py-3 text-black font-bold bg-amber-400 rounded-4xl">
                Sign Up
            </div>
        </div>
    </div>
}
