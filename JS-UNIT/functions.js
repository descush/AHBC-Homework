// function doubleNumber(numb) {
//     console.log(numb * 2);
// }

// doubleNumber(53);
// doubleNumber(6);


//display a name - accept a name and 

//ONE
// function addIng(a, b) {
//     return a + b;
// }

// let y = addIng(4, 9);
// console.log(y);

//TWO
// function adDing(a, b) {
//     console.log(a + b);
// }

// let y = adDing(6, 8);

//THREE
// function ageName(name, age) {
//     console.log(`${name} is ${age} years old.`);
// }

//  ageName("Matt", 21);

//THREE RETURN
// function ageName(name, age) {
//     return `${name} is ${age} years old.`;
// }

// console.log(ageName("Matt", 21));

//FOUR

// function squared(num) {
//     return num*num;
// }

// console.log(squared(7));

// FIVE
// function pythagorean(a, b) {
//     let c = 0;
//     c = Math.sqrt(square(a) + square(b))
//     return c;
// }

// let num1 = 2;
// let num2 = 3;
// console.log (`Sum of ${num1} and ${num2} : ${sum(2,3)}`);

// console.log(pythagorean(3, 6, 7));


//SHAPES

function getAreaOfCircle(radius) {
    let answer1 = Math.PI * radius * radius;
    return answer1;
}
console.log(getAreaOfCircle(4));

function getCircumferenceOfCircle(radius) {
    let answer2 = 2 * Math.PI * radius;
    return answer2;
}
console.log(getCircumferenceOfCircle(5))

function getAreaOfSquare(side) {
    let answer3 = side * side;
    return answer3;
}

console.log(getAreaOfSquare(8))

function getAreaOfTriangle(base, height) {
    let answer4 = 1 / 2 * base * height;
    return answer4;
}

console.log(getAreaOfTriangle(6, 9));