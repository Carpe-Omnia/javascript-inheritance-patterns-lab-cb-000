function Point(x,y) {
  this.x = x ;
  this.y = y ;
  this.toString = function() {
    return `(${this.x},${this.y})` ;
  }
}
function Shape() {
  this.addToPlane = function(x,y) {
    this.position = Point(x,y) ;
  }
}
function Circle() {
  Shape.call(this) ;

}
