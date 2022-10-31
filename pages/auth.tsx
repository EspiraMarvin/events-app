import React from "react"
import Background from "../components/Background"
import Login from "../components/Login"

export default function auth() {
  return (
    <>
      <Background />
      <div className="flex items-center justify-center h-screen text-white bg-black md:h-screen">
        <Login />
      </div>
    </>
  )
}
