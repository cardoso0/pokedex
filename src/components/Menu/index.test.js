import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { Menu } from '.'

const renderMenu = 
  <BrowserRouter>
    <Menu />
  </BrowserRouter>

describe("Menu Component", () => {
  it("component rendering | snapshot", () => {
    const tree = renderer
      .create(renderMenu)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("Menu component rendering", () => {
    const tree = renderer
      .create(renderMenu)
    expect(tree).toBeTruthy()
  })
})