import React from "react"
import Image from "next/image"
export default function Background() {
  return (
    <Image
      alt="background"
      src="/festival.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  )
}
