// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
}

console.log(add(55,1, 1001));


// this keyword - no longer bound

const user = {
  name: 'Tyler',
  cities: [ 'Jefferson City', 'Shawnee', 'Lenexa', 'Olathe'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city );
  }
 };

console.log(user.printPlacesLived());


const multiplier = {
  // numbers - Array of Numbers
  // multiplyby - single number
  // multiply - return a new array where the numbers have been multiplied
  numbers: [10,20,30],
  multiplyby: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyby * number);
  }
};
console.log(multiplier.multiply());
