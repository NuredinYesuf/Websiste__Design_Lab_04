/* A self invoking function to contain all the code except for the operation functions */
(function(){
  


    // opperation options 
    
var operation = prompt("Choose an operation \n 1.Addition \n 2.Multiplication \n 3.Subtraction \n 4.Division \n 5.Max  \n 6.Min  \n 7.Average")

if (operation == 1){
    var add = prompt("Addition \n Enter numbers separated with comma.").split(",")
    addition(add)
}
else if(operation == 2){
    var multiply = prompt("Multiplication \n Enter numbers separated with comma.").split(",")
    multiplication(multiply)
}
else if(operation == 3){
    var Minuend = prompt("Subtraction \n Enter the first number (Minuend).")
    var Subtrahend = prompt("Enter the second number (Subtrahend).")
    subtraction(Minuend, Subtrahend)

}

else if(operation == 4){
    var numerator = prompt("Division \n Enter the numerator.")
    var denominator = prompt("Enter the denominator. (must be different from 0)")
    if (denominator == 0) {
        console.log("Denominator must be different from zero.")
    
    }
    else{
        division(numerator, denominator)
    }
}
else if(operation == 5){
    var number_1 = prompt("Max \n Enter the first number.")
    var number_2 = prompt("Enter the second number.")
    max(number_1, number_2)
}

else if(operation == 6){
    var number_1 = prompt("Min \n Enter the first number.")
    var number_2 = prompt("Enter the second number.")
    min(number_1, number_2)
}

else if(operation == 7){
    var arrayList = prompt("Average \n Enter the numbers separated with comma.").split(",")
    average(arrayList)
}


})()


// functions for the operations

function addition(addNums){
    var adder = 0
    addNums.forEach(element => {
        adder += parseInt(element)
    })
    console.log(adder)
}

function multiplication(multiplyNums){
    var multiplier = 1
    multiplyNums.forEach(element => {
        multiplier *= parseInt(element)
    })
    console.log(multiplier)
}

function subtraction(Minuend, Subtrahend){
    var result = parseInt(Minuend) - parseInt(Subtrahend)
    console.log(result)
}

function division(numerator, denominator){
    var result = parseInt(numerator) / parseInt(denominator)
    console.log(result)
}

function max(number_1, number_2){
    if (parseInt(number_1) > parseInt(number_2)) {
        console.log("The maximum number is: " + number_1);
    }
    else{
        console.log("The maximum number is: " + number_2);
    }

}

function min(number_1, number_2){
    if(parseInt(number_1) > parseInt(number_2)){
        console.log("The minimum number is: " + number_2);
    }
    else{
        console.log("The minimum number is: " + number_1);
    }
}

function average(arrayOfNumbers){
    var adder = 0
    arrayOfNumbers.forEach(element => {
        adder += parseInt(element)
    });
    adder = adder/arrayOfNumbers.length
    console.log(adder);
}

