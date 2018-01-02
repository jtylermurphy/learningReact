var nameVar = "Tyler";
var nameVar = "Allison";
console.log ('namevar', nameVar);


let nameLet = "Tyler";
nameLet = "James";

console.log('nameLet', nameLet);


const nameConst = "Stella";
console.log('nameConst', nameConst);


function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

var fullName = "Tyler Murphy";
if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);
