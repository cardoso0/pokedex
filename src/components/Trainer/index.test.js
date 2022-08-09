import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"

import { Trainer } from "."

const renderTrainer =
  <Trainer />

describe("Trainer Component", () => {
  it ("component rendering | snapshot", () => {
    const tree = renderer
    .create(renderTrainer)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it ("component rendering", () => {
    expect(render(renderTrainer)).toBeTruthy
  })
})