function generateGrid(cols, rows) {
  let cellSize = Math.min(width / cols, height / rows); // Ensures cells remain square
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(0); // Grid lines color
      fill(255); // Cell color
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

const patternClasses = {
  "13x13": ThirteenSQ,
  "4x4": FourByFourPattern,
  "6x6": SixBySixPattern,
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
  let cellSize = Math.min(width / cols, height / rows); // Consistent with generateGrid
  let colSections = calculateSections(cols, patternClasses); // Calculate for columns
  let rowSections = calculateSections(rows, patternClasses); // Calculate for rows

  for (let colSection of colSections) {
    for (let rowSection of rowSections) {
      let patternType = colSection.type.includes("x")
        ? colSection.type
        : rowSection.type.includes("x")
        ? rowSection.type
        : "blank";

      if (patternType !== "blank") {
        let PatternClass =
          patternClasses[
            patternType.split("x")[0] + "x" + patternType.split("x")[0]
          ];
        if (PatternClass) {
          let pattern = new PatternClass();
          let x = colSection.start * cellSize;
          let y = rowSection.start * cellSize;
          let w = (colSection.end - colSection.start) * cellSize;
          let h = (rowSection.end - rowSection.start) * cellSize;
          pattern.draw(x, y, w, h);
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
  generateGrid(200, 200); // Generates the grid for patterns
  fetchPatterns(200, 200); // Draws patterns within the generated grid
}
