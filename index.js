function Point(x,y) {
  this.x = x ;
  this.y = y ;
}
Point.prototype.toString = function() {return `(${this.x},${this.y})` ;}

function Shape() {
}
Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y) ;
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

function Circle(radius) {
  this.radius = radius ;
  this.diameter = function() {return this.radius * 2 ;}
  this.area = function() {return this.radius**2 * Math.PI ; }
  this.circumference = function() {return  this.radius * 2 * Math.PI ;}
}
Circle.prototype = Object.create(Shape.prototype) ;
Circle.prototype.constructor = Shape ;

function Side(length) {
  this.length = length ;
}

function Polygon(sides) {
  this.sides = sides ;
}

Polygon.prototype = Object.create(Shape.prototype) ;
Polygon.prototype.constructor = Shape ;
Polygon.prototype.numberOfSides = function() {
  return this.sides.length ;
}
Polygon.prototype.perimeter = function() {
  var rim = 0 ;
  this.sides.forEach (function(element){
    rim += element.length ;
  })
  return rim ;
}

function Quadrilateral(s1, s2, s3, s4) {
  this.sides = [new Side(s1), new Side(s2), new Side(s3), new Side(s4)] ;
}
Quadrilateral.prototype = Object.create(Polygon.prototype) ;
Quadrilateral.prototype.constructor = Polygon ;

function Triangle(s1, s2, s3) {
  this.sides = [new Side(s1), new Side(s2), new Side(s3)] ;
}
Triangle.prototype = Object.create(Polygon.prototype) ;
Triangle.prototype.constructor = Polygon ;

function Rectangle(width, height) {
  this.width = width ; 
  this.height = height ; 
}
Rectangle.prototype = Object.create(Quadrilateral.prototype) ; 
Rectangle.prototype.constructor = Quadrilateral  ; 
Rectangle.prototype.area = function() {
  return this.width * this.height ; 
}
