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
        if (this.matrix[i][j] === "X") {
          fill("black"); // Fill color for X
        } else {
          noFill(); // No fill for O
        }
        stroke(0); // Grid line color
        rect(x + j * cellWidth, y + i * cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

class ThirteenSQ extends Pattern {
  constructor() {
    super([
      ["O", "O", "O", "O", "X", "X", "O", "X", "X", "O", "O", "O", "O"],
      ["O", "O", "X", "O", "X", "X", "O", "X", "X", "O", "X", "O", "O"],
      ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "O"],
      ["O", "O", "X", "O", "X", "X", "X", "X", "X", "O", "X", "O", "O"],
      ["X", "X", "O", "X", "X", "O", "O", "O", "X", "X", "O", "X", "X"],
      ["X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "X", "X", "X"],
      ["O", "O", "O", "X", "O", "X", "X", "X", "O", "X", "O", "O", "O"],
      ["X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "X", "X", "X"],
      ["X", "X", "O", "X", "X", "O", "O", "O", "X", "X", "O", "X", "X"],
      ["O", "O", "X", "O", "X", "X", "X", "X", "X", "O", "X", "O", "O"],
      ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "O"],
      ["O", "O", "X", "O", "X", "X", "O", "X", "X", "O", "X", "O", "O"],
      ["O", "O", "O", "O", "X", "X", "O", "X", "X", "O", "O", "O", "O"],
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

class TwoByTwoPattern extends Pattern {
  constructor() {
    super([
      ["X", "O"],
      ["X", "O"],
    ]);
  }
}
