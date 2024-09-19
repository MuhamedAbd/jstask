var balance = 5000;
var pin = 212;

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Successful withdrawal. New balance: " + balance);
    } else {
        console.log("Insufficient balance");
    }
}

function deposit(amount) {
    balance += amount;
    console.log("Successful deposit. New balance: " + balance);
}

function displayBalance() {
    console.log("Your current balance is: " + balance);
}

function atm() {
    userpin = Number(prompt("Enter your pin:"));
    if (userpin === pin) {
        console.log("Welcome");

        op = Number(prompt("Enter operation number: 1. Withdraw 2. Deposit 3. Display Balance:"));

        if (op === 1) {
            amount = Number(prompt("Enter amount to withdraw:"));
            withdraw(amount);
        } else if (op === 2) {
            amount = Number(prompt("Enter amount to deposit:"));
            deposit(amount);
        } else if (op === 3) {
            displayBalance();
        } else {
            console.log("Invalid operation.");
        }
    } else {
        console.log("Wrong pin");
    }
}

atm()
