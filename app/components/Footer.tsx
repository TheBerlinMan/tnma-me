'use client'

import { getCurrentDateLong } from '@/lib/functions'
import React from 'react'

const Footer = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-11 where 0 is January
  
  const getMessage = () => {
    if (currentMonth === 0 || currentMonth === 1) { // January or February
      return "PS: Cara cara oranges are in season";
    } else if (currentMonth >= 11 || currentMonth <= 3) { // December to April
      return "PS: Cara cara oranges are in season";
    } else {
      return "&quot;Just keep swimming.&quot;";
    }
  };
  
  return (
    <footer className="mt-auto text-gray-500 text-sm text-center py-4">
      <hr className="border-gray-500 border-1 mb-4" />
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">
          {getMessage()}
        </p>
        {/* <p>© {getCurrentDateLong()}</p> */}
        <p>{getCurrentDateLong()}</p>
      </div>
    </footer>
  )
}

export default Footer