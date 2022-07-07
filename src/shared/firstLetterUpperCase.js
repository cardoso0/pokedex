export const firstLetterUpperCase = (pokemon) =>
  pokemon.name[0].toUpperCase() + pokemon.name.substring(1)

export const firstLetterUpperCaseType = (pokemon) =>
  pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.substring(1)