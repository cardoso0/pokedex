import '@testing-library/jest-dom'

import { firstLetterUpperCase, firstLetterUpperCaseType } from './firstLetterUpperCase'

describe("firstLetterUpperCase", () => {
  it("firstLetterUpperCase should be a function", () => {
    expect(firstLetterUpperCase).toBeInstanceOf(Function)
  })

  it("must return a string of first letter upper case", () => {
    const pokemon = {
      name: 'bulbasaur'
    }
    expect(firstLetterUpperCase(pokemon)).toBe('Bulbasaur')
  })

  it("firstLetterUpperCaseType should be a function", () => {
    expect(firstLetterUpperCaseType).toBeInstanceOf(Function)
  })

  it("must return a string of first letter upper case type", () => {
    const pokemon = {
      types: [{
        type: {
          name: 'electric'
        }
      }],
    }
    expect(firstLetterUpperCaseType(pokemon)).toBe('Electric')
  })
})