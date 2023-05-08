// example 1 

FineDining();
Greeting();

function FineDining() {
    console.log('Table for how many');
};

const Greeting = () => console.log("M-my name?");

// example 2
// let does not hoist? false

console.log(fancyBurger);
console.log(burger);

let burger = "Krabby Patty 🍔";
var fancyBurger = "Krabby Newburg 🍖";
