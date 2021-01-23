var firstName;
var lastName;
var age;
var job;

firstName = prompt("Enter Your First Name")
lastName = prompt("Enter Your Last Name")
job = prompt("What is your profession?")
age = prompt("Enter Your Age")


let tempAge;

let isEligibleToVote;

tempAge = parseInt(age);

if( tempAge >= 18){
    isEligibleToVote = true;
}
else{
    isEligibleToVote = false;
}

/* Family members */

let familyMember = new Array();

let numberOfFamily;

numberOfFamily = prompt("Number of Family?" );

for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family members are" + (i + 1))
}

/* BMI */

var weight;
var height;
var BMI;

weight = prompt("Enter your weight in Kg: ")
height = prompt("Enter your height in meter: ")


function calcBmi(weight, height) {
    var bmiValue = weight/(Math.pow(height, 2))
    var bmi = bmiValue.toFixed(2)

    if (bmi < 18.5){
        return "BMI: " + bmi + " (Underweight)"
    }
    else if (bmi > 18.5 && bmi <= 24.9){
        return "BMI: " + bmi + " (Normal weight)"
    }
    else if (bmi >= 25 && bmi <= 29.9){
        return "BMI: " + bmi + " (Overweight)"
    }
    else{
        return "BMI: " + bmi + " (Obese)"
    }
}


(function(){
    console.log("Here is your profile")
    console.log("Full name:" + firstName + "" + lastName) 
    console.log("Profession:" + job)
    console.log("Age:" + age + "" + "years old")

    console.log("is Eligible to vote:" + isEligibleToVote);

    console.log("Family Members ")
    familyMember.forEach(function(member){
        console.log("family Member " + (familyMember.indexOf(member) + 1) + ":" + member)
    })

    BMI = calcBmi(weight, height)
    console.log(BMI)
})()