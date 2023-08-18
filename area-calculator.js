//  Triangle area calculation

function calculateTriangleArea() {
  const base = getElementField("triangle-base");

  const height = getElementField("triangle-height");

  const area = 0.5 * base * height;
  setElementField("triangle-area", area);
}

// Rectangle area calculation

function calculateRectangleArea() {
  const width = getElementField("rectangle-width");
  const length = getElementField("rectangle-length");
  const area = width * length;
  setElementField("rectangle-area", area);
}

// Parallelogram area calculation

function calculateParallelogramArea() {
  const paraBase = getElementField("parallelogram-base");
  const paraHeight = getElementField("parallelogram-height");

  const area = paraBase * paraHeight;
  setElementField("parallelogram-area", area);
}

// Rhombus area calculation

function calculateRhombusArea() {
  const diaMeterOne = getElementField("rhombus-diameter1");
  const diameterTwo = getElementField("rhombus-diameter2");
  const area = 0.5 * diaMeterOne * diameterTwo;
  setElementField("rhombus-area", area);
}

// pentagon area calculation

function calculatePentagonArea() {
  const periMeter = getElementField("pentagon-perimeter");
  const pentagonBase = getElementField("pentagon-base");
  const area = 0.5 * periMeter * pentagonBase;
  setElementField("pentagon-area", area);
}

// Ellipse area calculation

function calculateEllipseArea() {
  const axisA = getElementField("ellipse-axis");
  const axisB = getElementField("ellipse-baxis");
  area = 3.14 * axisA * axisB;
  setElementField("ellipse-area", area);
}
