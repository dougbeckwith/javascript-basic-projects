// Functions
const getRandomHexValue = () => {
  const hexValues = [0, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  return hexValues[Math.floor(Math.random() * 15)]
}
const getRandomHexColor = () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomHexValue()
  }
  return hexColor
}

// Elements
const button = document.querySelector('button')
const body = document.querySelector('body')
const span = document.querySelector('span')

// Events
button.addEventListener('click', () => {
  const hexColor = getRandomHexColor()
  body.style.backgroundColor = hexColor
  span.textContent = hexColor
})
