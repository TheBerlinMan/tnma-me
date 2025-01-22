import React from 'react'
import Image from 'next/image'

const Drawings = () => {
  return (
    <div>
      <div>Drawings</div>
      <Image src="/drawings/Abyss.jpg" alt="Drawing" width={500} height={500} />
    </div>
  )
}

export default Drawings