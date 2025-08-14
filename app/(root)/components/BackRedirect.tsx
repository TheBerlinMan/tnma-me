'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoveLeft } from 'lucide-react';


const BackRedirect = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  if (pathSegments.length === 0) {
    return null
  }

  let parentPathSegments = pathSegments.slice(0, -1)
  const seriesIndex = pathSegments.indexOf('series')
  if (seriesIndex !== -1) {
    parentPathSegments = pathSegments.slice(0, seriesIndex)
  }
  let parentPath = `/${parentPathSegments.join('/')}`

  let label
  let displayText
  if (parentPathSegments.length > 0) {
    const lastSegment = parentPathSegments[parentPathSegments.length - 1]
    label = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    displayText = `Return to ${label}`
  } else {
    label = 'Home'
    parentPath = '/home'
    displayText = 'Return Home'
  }

  return (
    <div className="text-sm font-light text-gray-500">
      <Link href={parentPath} className="flex items-center gap-3">
        <MoveLeft size={20} strokeWidth={1} />
        {displayText}
      </Link>
    </div>
  )
}

export default BackRedirect