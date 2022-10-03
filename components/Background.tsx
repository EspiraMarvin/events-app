import React from 'react'
import Image from 'next/image'
export default function Background()  {
  return (
    <Image
    alt="background"
    src="/background.jpg"
    layout='fill'
    objectFit='cover'
    quality={100}
    />
    )
}