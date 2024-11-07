const massMark = 95;
const heightMark = 1.90;
const massJohn = 107;
const heightJohn = 1.81;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);