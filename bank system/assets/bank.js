
// 

var deposit
var withdraw
var balance = 10000
var transfer


//operations 


var operation = prompt("Choose the service you want. \n 1. Deposit \n 2. Withdraw  \n 3. Balance \n 4.Transfer")
// deposite 
if (operation == "1"){
    var depositMoney = prompt("Deposit \n  Enter the amount of money you want to deposit.")
    deposit(depositMoney)
}

// withdrawal
else if(operation == "2"){
    var withdrawMoney = prompt("Withdraw \n Enter the amount of money you want to withdraw.")
    withdraw(withdrawMoney)
}

// ballance 
else if(operation == "3"){
    balanceFun()
}
else if(operation == "4"){
    var senderName = prompt("Enter your name: ")
    var receiverName = prompt("Enter the receiver name: ")
    var amountOfMoney = prompt("Enter the amount of money you want to transfer: ")

    transfer(senderName, receiverName, amountOfMoney)
}

// functions 




function deposit(amount) {
    balance += parseInt(amount)
    console.log("You have added " + amount + " birr to your account \n your balance is " + balance + " birr.")
}

function withdraw(amount){
    if (parseInt(amount) > 50000) {
        console.log("You can not withdraw this amount of money. The maximum amount of money you can withdraw per day is 50000.");
    } 
    else if(parseInt(amount) > balance ) {
        console.log("Your balance is insufficient.")
    }
    else{
        var balanceLeft = balance - parseInt(amount)
        balance = balanceLeft
        console.log(balance);
    }
}

function balanceFun(){
    console.log("Your balance is " + balance)
}

function transfer(s, r, amount){
    if (parseInt(amount) > balance) {
        console.log("Your balance is insufficient.");
    } else {
        var balanceLeft = balance - parseInt(amount)
        balance = balanceLeft
        console.log("Dear " + s + ", You have successfully sent " + amount + " Birr to " + r + "\n Your balance is " + balance);
    }
}
    


