// Something important on page load
document.addEventListener("DOMContentLoaded", () => {

  const grid = document.querySelector(".grid")

  // Makes everything inside of the div with class .grd an array so we can control each of them indep
  let squares = Array.from(document.querySelectorAll(".grid div"))
  const scoreDisplay = document.querySelector("#score")
  const StartBtn = document.querySelector("#start-button")
  const width = 10;

  //The Tetrominos
  const lTetromino = [
    [1, width+1, width*2+1, 2], 
    [width, width+1, width+2, width*2+1],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPositon = 4
  let current = theTetrominoes[0]

  console.log(theTetrominoes[0][0])

  // left off at 40:17 on freecodecamp tetris!
});

/*
// Get the button element
const button = document.querySelector('button');


// Add an event listener to the button
button.addEventListener('click', () => {
  alert('You clicked the button!');
});
*/

