'use client'

import { getCurrentDateLong } from '@/lib/functions'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 text-sm text-center py-4">
      <hr className="border-gray-500 border-1 mb-4" />
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">
          &quot;Just keep swimming.&quot;
        </p>
        {/* <p>© {getCurrentDateLong()}</p> */}
        <p>{getCurrentDateLong()}</p>
      </div>
    </footer>
  )
}

export default Footer