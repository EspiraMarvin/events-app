import React from "react";
import { render } from "@testing-library/react"
import HelloWorld from "./HelloWorld";

test('renders a message', () => {
    const { container, getByText } = render(<HelloWorld />)
    expect(getByText('Hello World')).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
    <p>
      Hello World
    </p>
  `);
})