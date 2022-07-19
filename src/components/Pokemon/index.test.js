import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"

import { Pokemon } from "."

const pokemon = {
  name: "Pikachu",
  sprites: "front_default",
  id: 1,
  types: [{type: {name: "electric"}}],
}

const renderPokemon = 
<Pokemon pokemon={pokemon} large="string" medium="string"/>

describe("Pokemon Component", () => {
  it ("component rendering | snapshot", () => {
    const tree = renderer
    .create(renderPokemon)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it ("component rendering", () => {
    expect(render(renderPokemon)).toBeTruthy
  })
})

describe("Rendering pokemon data", () => {
  it ("render pokemon name", () => {
    render(renderPokemon)
    const name = screen.getByText("Pikachu")
    expect(name).toBeTruthy()
  })

  it ("render pokemon id", () => {
    render(renderPokemon)
    const id = screen.getByText("#1")
    expect(id).toBeTruthy()
  })

  it("checking img alt", () => {
    render(renderPokemon)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("alt", "Pikachu")
  })

  it("render pokemon type", () => {
    render(renderPokemon)
    const type = screen.getByText("Electric")
    expect(type).toBeTruthy()
  })

})