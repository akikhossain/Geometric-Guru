//  Triangle area calculation

function calculateTriangleArea() {
  const base = getElementField("triangle-base");

  const height = getElementField("triangle-height");

  const area = 0.5 * base * height;
  setElementField("triangle-area", area);
}

// Rectangle area calculation
