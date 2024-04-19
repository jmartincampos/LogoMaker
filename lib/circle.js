// lib/circle.js
class Circle {
    constructor(points) {
      this.points = points;
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;
  