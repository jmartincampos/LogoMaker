// square.js
class Square {
    constructor(x, y, side) {
      this.x = x; // x-coordinate of the top-left corner of the square
      this.y = y; // y-coordinate of the top-left corner of the square
      this.side = side; // length of each side of the square
      this.color = ''; // color of the square
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Calculate coordinates of the square's vertices
      const x1 = this.x;
      const y1 = this.y;
      const x2 = this.x + this.side;
      const y2 = this.y;
      const x3 = this.x + this.side;
      const y3 = this.y + this.side;
      const x4 = this.x;
      const y4 = this.y + this.side;
  
      // Return SVG string for a square with the specified attributes
      return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;
  