'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//     console.log("My name is Michal");
// }


// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJucie = fruitProcessor(5, 0)
// console.log(appleJucie);


// const friutJuice = fruitProcessor(2, 3)
// console.log(friutJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age1, age2);

// const caclAge3 = birthYear => 2037 - birthYear;
// const age3 = caclAge3(2005);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, "Michal"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// const fruitJuice = fruitProcessor(2, 3);
// console.log(fruitJuice);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1996, "Michal"));
console.log(yearsUntilRetirement(1960, "Mike"));

