import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"

import { Title } from "."

const renderTitle = 
<Title />

describe("Title Component", () => {
  it ("component rendering | snapshot", () => {
    const tree = renderer
    .create(renderTitle)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it ("component rendering", () => {
    expect(render(renderTitle)).toBeTruthy
  })
})