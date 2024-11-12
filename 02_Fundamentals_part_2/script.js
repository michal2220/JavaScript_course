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


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} is already retired.`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1996, "Michal"));
// console.log(yearsUntilRetirement(1960, "Mike"));


// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);


// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Shmedtmann", 2037 - 1991, "Teacher", friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.push(23);
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));

// if (friends.includes("Steven")) {
//     console.log("You have a friend named Steven")
// }


// const jonas = {
//     firstName: "Jonas",
//     lastName: "Shmedtmann",
//     age: 2037 - 1996,
//     job: "teacher",
//     firends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const intrestedIn = prompt("What do You want to know about Jonas? Choose beteen: firstName, lastName, age, job, friends");

// if (jonas[intrestedIn]) {
//     console.log(jonas[intrestedIn]);
// } else {
//     console.log(`Wrong request! No ${intrestedIn}! Choose beteen: firstName, lastName, age, job, friends`)
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasshmedtman";
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.firends.length} friends and his best friend is ${jonas.firends[0]}.`)

const jonas = {
    firstName: "Jonas",
    lastName: "Shmedtmann",
    birthYear: 1991,
    job: "teacher",
    firends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary())
