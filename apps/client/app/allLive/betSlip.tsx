import { Ticket } from 'lucide-react'
import React from 'react'

const BetSlip = () => {
  return (
    <div className="hidden md:block">
      {/* Right Section (Betslip) */}
      <div className="bg-gray-300 w-72 min-h-screen p-4">
        <h2 className="text-lg font-medium flex items-center justify-center">
          Betslip
        </h2>
        <div className="flex place-items-center justify-center mt-20 text-gray-500">
          <Ticket size="40" />
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <h1 className="text-black">Your betslip is empty</h1>
          <h3 className="text-gray-500">Click odds to add a bet to the betlist</h3>
        </div>
      </div>
    </div>
  )
}

export default BetSlip
