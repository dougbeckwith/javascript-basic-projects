// Variables
let playerOneScore = 0
let playerTwoScore = 0
let playTo = null
let gameOver = null

// Elements
const scoreParagraph = document.querySelector('.score')
const selectedPlayTo = document.querySelector('#select-playto')
const playerOneButton = document.querySelector('.btn-player-one')
const playerTwoButton = document.querySelector('.btn-player-two')
const resetButton = document.querySelector('.btn-reset')
const startButton = document.querySelector('.btn-start')

// Functions
const playerOneAddOnePoint = () => {
  playerOneScore++
  setScore()
  if (playerOneScore == playTo) {
    gameOver = true
    resetGame()
  }
  if (gameOver === true) {
    alert('Player One Wins')
  }
}
const playerTwoAddOnePoint = () => {
  playerTwoScore++
  setScore()
  if (playerTwoScore == playTo) {
    gameOver = true
    resetGame()
    console.log('test')
  }
  if (gameOver === true) {
    alert('Player Two Wins')
  }
}
const resetGame = () => {
  playerOneScore = 0
  playerTwoScore = 0
  playTo = null
  gameOver = true
}
const enableButtons = () => {
  playerOneButton.disabled = false
  playerTwoButton.disabled = false
}
const disableButtons = () => {
  playerOneButton.disabled = true
  playerTwoButton.disabled = true
}
const setScore = () => {
  scoreParagraph.innerText = `${playerOneScore} to ${playerTwoScore}`
}
const setPlayTo = () => {
  playTo = selectedPlayTo.value
  console.log(playTo)
}
const onLoad = () => {
  disableButtons()
}
const isGameOver = () => {
  if (playerOneScore === playTo || playerTwoScore === playTo) {
    gameOver = true
  }
}
const startGame = () => {
  enableButtons()
  setPlayTo()
  gameOver = false
}

// Events
playerOneButton.addEventListener('click', playerOneAddOnePoint)
playerTwoButton.addEventListener('click', playerTwoAddOnePoint)
resetButton.addEventListener('click', resetGame)
startButton.addEventListener('click', startGame)

onLoad()
