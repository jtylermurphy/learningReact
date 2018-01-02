// const square = function (x) {
//   return x * x;
// };
//
// console.log(square(3));


// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(4));


// Use arrow functions
// getFirstName('Mike Smith') -> Mike
// Create reg arrow functions
// Create short arrow function

const getFirstName = (x) => {
  return x.split(' ')[0];
}
console.log(getFirstName('Mike Smith'));

const getFirstName2 = (x) => x.split(' ')[0];

console.log(getFirstName2('Mike Smith'));
