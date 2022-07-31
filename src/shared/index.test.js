import '@testing-library/jest-dom'
import { colors } from './colorsBgPokemons'
import { firstLetterUpperCase, firstLetterUpperCaseType } from './firstLetterUpperCase'
import { handleFavorite } from './handleFavorite'

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

describe("colors", () => {
  it("colors should be a object", () => {
    expect(colors).toBeInstanceOf(Object)
  })

  it("must return a string color", () => {
    expect(colors).toBeTruthy()
  })
})

describe("handleFavorite", () => {
  it("handleFavorite should be a function", () => {
    expect(handleFavorite).toBeInstanceOf(Function)
  })

  it("must return a updatedFavorites", () => {
    const pokemon = {
      name: 'Pikachu'
    }
    const favorites = []
    const setState = () =>
    expect(handleFavorite(pokemon, favorites, setState)).toBe()
  })
})