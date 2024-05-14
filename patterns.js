// Array of themes, each with a name and three colors
const themes = [
  { name: "Sunset", colors: ["#FF6347", "#FFDAB9", "#FF4500"] }, // Tomato, PeachPuff, OrangeRed
  { name: "Ocean", colors: ["#1E90FF", "#F0F8FF", "#00BFFF"] }, // DodgerBlue, AliceBlue, DeepSkyBlue
  { name: "Forest", colors: ["#228B22", "#ADFF2F", "#006400"] }, // ForestGreen, GreenYellow, DarkGreen
];

// Select a random theme at the start of the sketch
let selectedTheme = themes[Math.floor(Math.random() * themes.length)];

class Pattern {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
  }

  draw(x, y, w, h) {
    let cellWidth = w / this.cols;
    let cellHeight = h / this.rows;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Select color based on the cell value
        switch (this.matrix[i][j]) {
          case "X":
            fill(selectedTheme.colors[0]); // First color for "X"
            break;
          case "O":
            fill(selectedTheme.colors[1]); // Second color for "O"
            break;
          case "Y":
            fill(selectedTheme.colors[2]); // Third color for "Y"
            break;
          default:
            noFill(); // No fill if unexpected character
        }
        stroke(0); // Grid line color
        rect(x + j * cellWidth, y + i * cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

class Thirteen extends Pattern {
  constructor() {
    super([
      ["O", "O", "O", "O", "X", "X", "O", "X", "X", "O", "O", "O", "O"],
      ["O", "O", "X", "O", "X", "X", "O", "X", "X", "O", "X", "O", "O"],
      ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "O"],
      ["O", "O", "X", "O", "X", "X", "X", "X", "X", "O", "X", "O", "O"],
      ["X", "X", "O", "X", "X", "O", "O", "O", "X", "X", "O", "X", "X"],
      ["X", "X", "X", "X", "O", "Y", "Y", "Y", "O", "X", "X", "X", "X"],
      ["O", "O", "O", "X", "O", "Y", "Y", "Y", "O", "X", "O", "O", "O"],
      ["X", "X", "X", "X", "O", "Y", "Y", "Y", "O", "X", "X", "X", "X"],
      ["X", "X", "O", "X", "X", "O", "O", "O", "X", "X", "O", "X", "X"],
      ["O", "O", "X", "O", "X", "X", "X", "X", "X", "O", "X", "O", "O"],
      ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "O"],
      ["O", "O", "X", "O", "X", "X", "O", "X", "X", "O", "X", "O", "O"],
      ["O", "O", "O", "O", "X", "X", "O", "X", "X", "O", "O", "O", "O"],
    ]);
  }
}

class Twelwe extends Pattern {
  constructor() {
    super([
      ["X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
      ["X", "O", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X"],
      ["O", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X"],
      ["O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "O"],
      ["O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O"],
      ["X", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "O"],
      ["X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
      ["X", "O", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X"],
      ["O", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X"],
      ["O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "O"],
      ["O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O"],
      ["X", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "O"],
    ]);
  }
}
class Fourteen extends Pattern {
  constructor() {
    super([
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X"],
      ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X"],
      ["X", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "O", "O", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "X", "X", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "X", "O", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "X", "O", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "X", "X", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O", "O", "O", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X"],
      ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X"],
      ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ]);
  }
}

class ThreeByThree extends Pattern {
  constructor() {
    super([
      ["X", "O", "O"],
      ["O", "X", "O"],
      ["O", "O", "X"],
    ]);
  }
}

class FourByFourPattern extends Pattern {
  constructor() {
    super([
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"],
    ]);
  }
}
class FiveByFive extends Pattern {
  constructor() {
    super([
      ["X", "O", "O", "O", "X"],
      ["O", "X", "O", "X", "O"],
      ["O", "O", "X", "O", "O"],
      ["O", "X", "O", "X", "O"],
      ["X", "O", "O", "O", "X"],
    ]);
  }
}

class SixBySixPattern extends Pattern {
  constructor() {
    super([
      ["X", "O", "X", "O", "X", "O"],
      ["O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O"],
      ["O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "O", "X", "O"],
      ["O", "X", "O", "X", "O", "X"],
    ]);
  }
}
class SevenBySeven extends Pattern {
  constructor() {
    super([
      ["O", "O", "O", "X", "O", "O", "O"],
      ["O", "O", "X", "X", "X", "O", "O"],
      ["O", "X", "O", "X", "O", "X", "O"],
      ["X", "X", "X", "O", "X", "X", "X"],
      ["O", "X", "O", "X", "O", "X", "O"],
      ["O", "O", "X", "X", "X", "O", "O"],
      ["O", "O", "O", "X", "O", "O", "O"],
    ]);
  }
}

class TwoByTwoPattern extends Pattern {
  constructor() {
    super([
      ["X", "O"],
      ["X", "O"],
    ]);
  }
}
