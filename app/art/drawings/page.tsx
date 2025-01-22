import React from 'react'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

async function getDrawings() {
  const drawingsDir = path.join(process.cwd(), 'public', 'drawings')
  return fs.readdirSync(drawingsDir)
}

export default async function Drawings() {
  const drawingFiles = await getDrawings()
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {drawingFiles.map((filename, index) => (
        <Image 
          key={index}
          src={`/drawings/${filename}`} 
          alt={`Drawing - ${filename}`} 
          width={300} 
          height={300}
        />
      ))}
    </div>
  )
}