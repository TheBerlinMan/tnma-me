'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Undo2 } from 'lucide-react';


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
  if (parentPathSegments.length > 0) {
    const lastSegment = parentPathSegments[parentPathSegments.length - 1]
    label = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  } else {
    label = 'Home'
    parentPath = '/home'
  }

  return (
    <div className="text-xs font-light text-gray-500 mb-6">
      <Link href={parentPath} className="flex items-center gap-1">
        <Undo2 size={16} strokeWidth={1} />
        {`Return to ${label}`}
      </Link>
    </div>
  )
}

export default BackRedirect