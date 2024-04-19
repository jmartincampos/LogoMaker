// lib/circle.js
class Circle {
    constructor(cx, cy, radius) {
      this.cx = cx;
      this.cy = cy;
      this.radius = radius;
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Return SVG string for a circle with the specified attributes
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;
  
  