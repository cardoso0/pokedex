import { render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer'

import { Header } from '.'

describe("Header Component", () => {
  it ("Header component rendering", () => {
    const tree = renderer
    .create(<Header />)
    expect(tree).toBeTruthy()
  })

  
})