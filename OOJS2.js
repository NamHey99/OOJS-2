class Shape {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sideLength * this.sides);    
  }
}
const triangle = new Shape("Triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
   constructor(sideLength) {
      super("square", 4, sideLength);
   }
   calcArea() {
     let area = this.sideLength * this.sideLength;
     console.log(area);
   }
}
const square = new Square(5);
square.calcPerimeter();
square.calcArea();
