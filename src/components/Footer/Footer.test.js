import { render, screen } from "@testing-library/react"
import { Footer } from "."

describe("FooterComponent", () => {
  test("must contain this paragraph Desenvolvido por Felipe Cardoso", () => {
    render(<Footer />)
    
    const footerParagraph = screen.getByText("Desenvolvido por Felipe Cardoso")

    expect(footerParagraph).toBeTruthy()
  })
})