function generateGrid(cols, rows) {
  let cellSize = Math.min(width / cols, height / rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(0);
      fill(255);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

const patternClasses = {
  "14x14": Fourteen,
  "13x13": Thirteen,
  "12x12": Twelwe,
  "4x4": FourByFourPattern,
  "5x5": FiveByFive,
  "6x6": SixBySixPattern,
  "7x7": SevenBySeven,
  "2x2": TwoByTwoPattern,
  "3x3": ThreeByThree,
};

function calculateSections(dim, patterns) {
  let sections = [];
  let position = 0;
  while (position < dim) {
    let availablePatterns = Object.keys(patterns)
      .map((key) => parseInt(key.split("x")[0]))
      .filter((size) => size + position <= dim);
    if (availablePatterns.length === 0) {
      sections.push({ type: "2x2", start: position, end: dim });
      break;
    }
    let patternSize =
      availablePatterns[Math.floor(Math.random() * availablePatterns.length)];
    sections.push({
      type: `${patternSize}x${patternSize}`,
      start: position,
      end: position + patternSize,
    });
    position += patternSize;
  }
  return sections;
}

function fetchPatterns(cols, rows) {
  let cellSize = Math.min(width / cols, height / rows);
  let colSections = calculateSections(cols, patternClasses);
  let rowSections = calculateSections(rows, patternClasses);

  for (let colSection of colSections) {
    for (let rowSection of rowSections) {
      let patternType =
        colSection.type === rowSection.type ? colSection.type : "2x2";
      let PatternClass = patternClasses[patternType];
      if (PatternClass) {
        let pattern = new PatternClass();
        let x = colSection.start * cellSize;
        let y = rowSection.start * cellSize;
        let w = (colSection.end - colSection.start) * cellSize;
        let h = (rowSection.end - rowSection.start) * cellSize;
        pattern.draw(x, y, w, h);
      } else {
        console.error("Pattern class not found for key:", patternType);
      }
    }
  }
}

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(225);
  generateGrid(160, 160);
  fetchPatterns(160, 160);
}
