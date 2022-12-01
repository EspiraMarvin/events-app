import React from "react"

type Props = {}

export default function Loader({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-r-2 border-[#0EA5E9]" />
    </div>
  )
}
