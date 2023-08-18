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
