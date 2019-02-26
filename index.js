function Point(x,y) {
  this.x = x ;
  this.y = y ;
  }
}
Point.prototype.toString = function() {return `(${this.x},${this.y})` ;}

function Shape() {
  this.addToPlane = function(x,y) {
    this.position = Point(x,y) ;
  }
  this.move = function(x,y) {
    this.position = Point(x,y)
  }
}

function Circle(radius) {
  this.radius = radius ;
  this.area = radius^2 * 3.14159 ;
  this.circumference = radius * 2 * 3.14159 ;
}
Circle.prototype = Object.create(Shape.prototype) ;
Circle.prototype.constructor = Shape ;
