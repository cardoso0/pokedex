import { render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer'

import { Footer } from "."

describe("FooterComponent", () => {
  it ("component rendering footer", () => {
    const tree = renderer
    .create(<Footer />)
    expect(tree).toBeTruthy()
  })

  it ("must contain this paragraph Desenvolvido por Felipe Cardoso", () => {
    render(<Footer />)
    const footerParagraph = screen.getByText("Footer.copy")
    expect(footerParagraph).toBeTruthy()
  })

  it ("component rendering", () => {
    const tree = renderer
    .create(<Footer />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})