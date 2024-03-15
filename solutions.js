// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Water";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "Water";
  } else if (column >= 3) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Hills";
  }
}
function level3Solution() {
  if (column >= 3 && column <= 7) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Hills";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "Hills";
  } else {
    tile.innerHTML = "Sand";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = " Hills";
  } else if (row <= 5) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Water";
  }
}

function level6Solution() {
  if (row <= 5 && row >= 2) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Water";
  }
}

function level7Solution() {
  if (row == 4 && column == 7) {
    tile.innerHTML = "Water";
  } else {
    tile.innerHTML = "Sand";
  }
}

function level8Solution() {
  if (row == 5 || column == 2) {
    tile.innerHTML = "Tree";
  } else {
    tile.innerHTML = "Sand";
  }
}

function level9Solution() {
  if (row <= 5 && column <= 5) {
    tile.innerHTML = "Water";
  } else {
    tile.innerHTML = "Sand";
  }
}

function level10Solution() {
  if (column <= 1) {
    tile.innerHTML = "Hills";
  } else if (column <= 3) {
    tile.innerHTML = "Tree";
  } else if (column <= 7) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Water";
  }
}

function level11Solution() {
  if (column <= 5 && row <= 3) {
    tile.innerHTML = "Water";
  } else if (column <= 5 && row >= 4) {
    tile.innerHTML = "Sand";
  } else if (column >= 6 && row <= 3) {
    tile.innerHTML = "Hills";
  } else {
    tile.innerHTML = "Tree";
  }
}

function level12Solution() {
  if ((row <= 4 && column <= 5) || (row >= 5 && column >= 6)) {
    tile.innerHTML = "Water";
  } else {
    tile.innerHTML = "Sand";
  }
}

function level13Solution() {
  if (row >= 2 && row <= 5 && column >= 4 && column <= 9) {
    tile.innerHTML = "Sand";
  } else {
    tile.innerHTML = "Tree";
  }
}

function level14Solution() {
  if (row >= 1 && row <= 5 && column >= 2 && column <= 4) {
    tile.innerHTML = "Tree";
  } else if (row >= 3 && row <= 5 && column >= 7 && column <= 10) {
    tile.innerHTML = "Water";
  } else {
    tile.innerHTML = "Sand";
  }
}
