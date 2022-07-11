import { render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import { Header } from '.'
import { pokedex } from "../../assets/pokedex.png"
import { pokebola } from '../../assets/favicon.png'

describe("Header Component", () => {
  it("component rendering | snapshot", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Header component rendering", () => {
    const tree = renderer
      .create(<Header />)
    expect(tree).toBeTruthy()
  })

  it('checking logo alt', () => {
    render(<Header />)
    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('alt', 'logo pokedex')
  })

  it('checking logo src', () => {
    render(<Header />)
    const logo = screen.getByAltText('logo pokedex')
    expect(logo).toHaveAttribute('src', pokedex)
  })

  it('checking pokebola alt', () => {
    render(<Header />)
    const image = screen.getByAltText('pokebola')
    expect(image).toHaveAttribute('alt', 'pokebola')
  })

  it('checking pokebola src', () => {
    render(<Header />)
    const image = screen.getByAltText('pokebola')
    expect(image).toHaveAttribute('src', pokebola)
  })
})