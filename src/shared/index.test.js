import '@testing-library/jest-dom'
import { colors } from './colorsBgPokemons'
import { firstLetterUpperCase, firstLetterUpperCaseType } from './firstLetterUpperCase'
import { handleFavorite } from './handleFavorite'
import { getItemToLocalStorage } from './getItemToLocalStorage'
import { navigateToDetailsPokemon } from './navigateToDetailsPokemon'
import { verifyFavorite } from './verifyFavorite'

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

  it('must return a updatedFavorites', () => {
    const pokemon = {
      name: 'Pikachu'
    }
    const favorites = []
    const setState = jest.fn();
    handleFavorite(pokemon, favorites, setState);
    expect(setState).toHaveBeenCalled();
  })
})

describe("getItemToLocalStorage", () => {
  it("getItemToLocalStorage should be a function", () => {
    expect(getItemToLocalStorage).toBeInstanceOf(Function)
  })

  it('must set value to state', () => {
    const state = jest.fn()
    getItemToLocalStorage(state)
    expect(state).toHaveBeenCalled()
  })
})

describe("navigateToDetailsPokemon", () => {
  it("navigateToDetailsPokemon should be a function", () => {
    expect(navigateToDetailsPokemon).toBeInstanceOf(Function)
  })

  it('must set values to statePokemon', () => {
    const statePokemon = jest.fn()
    getItemToLocalStorage(statePokemon)
    expect(statePokemon).toHaveBeenCalled()
  })

  it('must set values to stateSearched', () => {
    const stateSearched = jest.fn()
    getItemToLocalStorage(stateSearched)
    expect(stateSearched).toHaveBeenCalled()
  })
})

describe("verifyFavorite", () => {
  it("verifyFavorite should be a function", () => {
    expect(verifyFavorite).toBeInstanceOf(Function)
  })
})