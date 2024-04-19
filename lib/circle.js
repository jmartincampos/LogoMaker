// lib/circle.js
class Circle {
    constructor(cx, cy, radius) {
      this.cx = cx;// circle.js
      class Circle {
        constructor(cx, cy, radius) {
          this.cx = cx; // x-coordinate of the center of the circle
          this.cy = cy; // y-coordinate of the center of the circle
          this.radius = radius; // radius of the circle
          this.color = ''; // color of the circle
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
  
  