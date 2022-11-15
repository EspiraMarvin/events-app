import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../../pages/index"
import { SessionProvider } from "next-auth/react"

const MockHome = () => {
  // const { data: session } = ()

  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  )
}
describe("Home", () => {
  it("renders a heading", () => {
    // render(<MockHome />)
    // const heading = screen.getByRole("title", {
    // name: /Home Page/i,
    // })
    // expect(heading).toBeInTheDocument()
  })
})
