// Global Variables
let counter = 0

// Functions
const main = () => {
  setCounter()
}
const setCounter = () => {
  number.innerText = counter
}
const incrementCounter = () => {
  counter++
  setCounter()
}
const decrementCounter = () => {
  counter--
  setCounter()
}
const resetCounter = () => {
  counter = 0
  setCounter()
}

// Elements
const decreaseBtn = document.querySelector('.btn-decrease')
const resetBtn = document.querySelector('.btn-reset')
const increaseBtn = document.querySelector('.btn-increase')
const number = document.querySelector('h2')

// Event Listeners
decreaseBtn.addEventListener('click', decrementCounter)
resetBtn.addEventListener('click', resetCounter)
increaseBtn.addEventListener('click', incrementCounter)

main()
