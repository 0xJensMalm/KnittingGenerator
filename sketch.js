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

function calculateSections(size, availablePatterns) {
  let sections = [];
  // Randomly choose two different pattern sizes
  let keys = Object.keys(availablePatterns);
  let randomIndex1 = Math.floor(Math.random() * keys.length);
  let randomIndex2 =
    (randomIndex1 + Math.floor(Math.random() * (keys.length - 1)) + 1) %
    keys.length;
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

  let patternSizes = [
    parseInt(keys[randomIndex1].split("x")[0]),
    parseInt(keys[randomIndex2].split("x")[0]),
  ];

  // Sort pattern sizes to start with the larger for better fit
  patternSizes.sort((a, b) => b - a);

  let currentPos = 0;
  let toggle = 0; // Toggle between two patterns

  while (currentPos < size) {
    let patternSize = patternSizes[toggle % 2];
    if (currentPos + patternSize <= size) {
      sections.push({
        type: `${patternSize}x${patternSize}`,
        start: currentPos,
        end: currentPos + patternSize,
      });
      currentPos += patternSize;
    } else {
      sections.push({ type: "blank", start: currentPos, end: size });
      break;
    }
    toggle++; // Toggle to the next pattern size
  }

  // Ensure symmetry: analyze and adjust sections to center the patterns if there is any blank space
  let endBlankSize = size - currentPos;
  if (endBlankSize > 0) {
    let startBlank = sections[0];
    if (startBlank.type === "blank") {
      startBlank.end = Math.ceil(endBlankSize / 2);
    } else {
      sections.unshift({
        type: "blank",
        start: 0,
        end: Math.ceil(endBlankSize / 2),
      });
    }
    sections.push({
      type: "blank",
      start: size - Math.floor(endBlankSize / 2),
      end: size,
    });
  }

  return sections;
}

function fetchPatterns(cols, rows) {
  let cellSize = Math.min(width / cols, height / rows);
  let colSections = calculateSections(cols, patternClasses);
  let rowSections = calculateSections(rows, patternClasses);

  for (let colSection of colSections) {
    for (let rowSection of rowSections) {
      let patternType = colSection.type.includes("x")
        ? colSection.type
        : rowSection.type.includes("x")
        ? rowSection.type
        : "blank";

      if (patternType !== "blank") {
        let patternKey =
          patternType.split("x")[0] + "x" + patternType.split("x")[0];
        let PatternClass = patternClasses[patternKey];
        if (PatternClass) {
          let pattern = new PatternClass();
          let x = colSection.start * cellSize;
          let y = rowSection.start * cellSize;
          let w = (colSection.end - colSection.start) * cellSize;
          let h = (rowSection.end - rowSection.start) * cellSize;
          pattern.draw(x, y, w, h);
        } else {
          console.error("Pattern class not found for key:", patternKey);
        }
      }
    }
  }
}

function setup() {
  createCanvas(800, 800); // Maintain this size or adjust as necessary
  noLoop(); // This prevents continuous redrawing
}

function draw() {
  background(225); // Light grey background
  generateGrid(160, 160); // Generates the grid for patterns
  fetchPatterns(160, 160); // Draws patterns within the generated grid
}
