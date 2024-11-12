const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName} (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName} (${mark.bmi})!`)
}