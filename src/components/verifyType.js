const colors = {
  'electric': '#C5F200',
  'water': 'blue',
  'grass': '#D6D58E',
  'fire': 'red',
  'poison': '#5CD328',
  'bug': '#3F461F',
  'normal': '#9E9C95'
}

export const verifyType = (prop) => {
  for (let color in colors) {
    if (prop.pokemonType == color) {
      return colors[color]
    }
  }
}