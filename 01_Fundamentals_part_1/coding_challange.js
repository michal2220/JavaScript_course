const massMark = 95;
const heightMark = 1.90;
const massJohn = 110;
const heightJohn = 1.81;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
}
