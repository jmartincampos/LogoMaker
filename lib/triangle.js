// triangle.js
class Triangle {
    constructor(points) {
      this.points = points; // Points of the triangle (format: "x1,y1 x2,y2 x3,y3")
      this.color = ''; // color of the triangle
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Return SVG string for a triangle with the specified points and color
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Triangle;
  