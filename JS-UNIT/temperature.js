const prompt = require('prompt-sync')();

const input = prompt("What is the temperature? ");

const unit = input[input.length -1]; //unit person put in

console.log(unit);
let tempUnit = +input.substring(0, input.length -1);
console.log(input);
console.log(tempUnit);

if (unit === "F") {
    console.log(tempUnit - 32 * .556);
} else if (unit === "C") {
    console.log((tempUnit * 1.8) +32);
} else {
    console.log("Please specify F or C at the end of your submission.");
}


//const convert = function(degree, unit){
//if(unit === 'C'){
// let something = (unit * 9 / 5) + 32;
//   return something + "F";
//} else if (unit === 'F'){
//    let something = (unit * 5 / 9) - 32;
//    return something + "C";
//} else {
//    console.log("Please specify F or C at the end of your submission.");
//}
//}

//console.log(convert(60, F))


