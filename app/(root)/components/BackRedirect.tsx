'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



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

  if (parentPathSegments.length === 0) {
    parentPath = '/'
  }

  const titleOverrides: Record<string, string> = {
    'projects': 'Sewing',
    'drawings': 'Drawings',
  }

  const currentSegment = pathSegments[pathSegments.length - 1]
  const pageTitle = titleOverrides[currentSegment] ?? currentSegment.charAt(0).toUpperCase() + currentSegment.slice(1)

  return (
    <Link href={parentPath}>
      <p>{pageTitle}</p>
    </Link>
  )
}

export default BackRedirect