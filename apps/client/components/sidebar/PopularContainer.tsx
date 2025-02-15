

interface PopularContainerProps{
    gameName: string,
    height: string
}

export function PopularContainer({gameName, height}: PopularContainerProps){
    return <div className="p-4">
        <div className="py-3">{gameName} <span className="text-6xl">.</span> POPULAR</div>
        <div className={`w-full ${height} rounded-2xl bg-gray-800`}></div>
    </div>
}