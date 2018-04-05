function getTriangleArea(a, h) {
  var triangleArea = (a * h)/2;
  if (a>0 && h>0) {
    return triangleArea;
  }
  else {
    return 'incorrect data';
  }
}

console.log(getTriangleArea(10, 6));

var firstTraingleArea = getTriangleArea(-5, -8);
var secondTriangleArea = getTriangleArea(0, -2);
var thirdTriangleArea = getTriangleArea(10, -2);

console.log(firstTraingleArea);
console.log(secondTriangleArea);
console.log(thirdTriangleArea);
