// 1. let & const
// Create a shopping cart with let (can be updated).
// Add a few items, then reassign it to add a discount code.
// Try the same with const and explain why it fails.
//Answer:
//Using let can be reassigned, while const cannot be reassigned.
let shoppingCart = ["apple", "banana", "orange"];
shoppingCart.push("grape");
shoppingCart = [...shoppingCart, "DISCOUNT10"]; // Reassign
console.log(shoppingCart);
//------------------------------------------------------------
const fixedCart = ["bread", "milk"];
fixedCart.push("eggs"); // Error: Cannot add items to a const array
console.log(fixedCart);


// 2. Arrow Functions
// Create an arrow function "calculateTax(price)" that adds 15% tax to a price.
// Use it to calculate tax for prices: 100, 250, 500.
//Answer:
const calculateTax = (price) => price + price * 0.15;
console.log(calculateTax(100));
console.log(calculateTax(250));
console.log(calculateTax(500));

// 3. Template Literals
// Create a function that takes a student's name and grade
// and logs: "Student [name] has scored [grade]% in the final exam."
//Answer:
function logStudentInfo(name, grade) {
    console.log(`Student ${name} has scored ${grade}% in the final exam.`);
};
logStudentInfo("Alice", 90);

// 4. Default Parameters
// Create a function "applyDiscount(price, discount = 0.1)" 
// that subtracts discount from the price (default 10%).
// Call it with and without a discount parameter.
//Answer:
function applyDiscount(price, discount = 0.1) {
    return price - (price * discount);
}
console.log(applyDiscount(100)); // 90 (10% discount)
console.log(applyDiscount(100, 0.2)); // 80 (20% discount)

// 5. Destructuring
// You have an object { title: "Book", author: "John Doe", price: 200 }
// Use destructuring to extract title and price into variables.
// Print them in a sentence using template literals.
//Answer:
const book = { title: "Book", author: "John Doe", price: 200 };
const { title, price } = book;
console.log(`The "${title}" costs $${price}.`);

// 6. Spread Operator
// You have two arrays: ["Math", "English"] and ["Science", "History"]
// Merge them into a single "subjects" array using spread.
// Then add another subject "PE" to the end.
//Answer:
const arts = ['math', 'english'];
const sciences = ['science', 'history'];
const subjects = [...arts, ...sciences];
subjects.push('PE');
console.log(subjects); // ["Math", "English", "Science", "History", "PE"]

// 7. Rest Parameters
// Create a function "maxNumber(...nums)" that returns the largest number given.
// Test it with (5, 10, 3, 20, 15)
//Answer:
const maxNumber = (...nums) => Math.max(...nums);
console.log(maxNumber(5, 10, 3, 20, 15)); // 20


// 8. Enhanced Object Literals
// Create an object student with properties: name, grade
// Add a method introduce() that logs: "Hi, I'm [name] and my grade is [grade]"
//Answer:
const student = {
    name: "Sarah",
    grade: 88,
    introduce() {
        console.log(`Hi, I'm ${this.name} and my grade is ${this.grade}.`);
    }
};

// 9. Classes
// Create a class BankAccount with:
// - property balance
// - method deposit(amount)
// - method withdraw(amount)
// Create an object and perform a few deposits/withdrawals.
//Answer:
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(myAccount.balance); // 120

// 10. Promises
// Create a function fetchUser() that returns a Promise.
// After 1.5 seconds, it should resolve with an object: { id: 1, name: "Ali" }.
// Use .then() to log "User found: [name]"
const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Ali" });
        }, 1500);
    });
};

fetchUser().then(user => {
    console.log(`User found: ${user.name}`);
});