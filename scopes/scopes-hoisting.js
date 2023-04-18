// if (true) {
//   var villain = 'Joker'; 
//   const hero = 'Batman';
//   let sidekick = 'Robin';
// }

// console.log(villain); // Joker
// console.log(hero); // ReferenceError: num is not defined
// console.log(sidekick); // ReferenceError: num2 is not defined

'---------------------------------------------------------';


// console.log(hero); // ReferenceError: hero is not defined
// console.log(sidekick); // ReferenceError: sidekick is not defined

// const hero = 'Batman';
// let sidekick = 'Robin';

'---------------------------------------------------------';

// const hero = 'Batman';
// hero = 'Spiderman';

// console.log(hero); // TypeError: Assignment to constant variable.

'---------------------------------------------------------';



// console.log(villain); // undefined
// myQuote(); // I'm Batman!

// var villain = 'Joker'; 

// function myQuote() {
//   console.log('I'm Batman!');
// }

'---------------------------------------------------------';

// console.log(sidekick); // ReferenceError: num is not defined
// myQuote(); // ReferenceError: myFunc is not defined

// let sidekick = 'Robin';

// function myQuote() {
//   console.log('I'm Batman!');
// }

'---------------------------------------------------------';

// if (true) {
//   console.log(villain); // undefined
//   console.log(myQuote); // [Function: myQuote]

//  var villain = 'Joker'; 

//  function myQuote() {
//    console.log('I'm Batman!');
//  }
// }

// console.log(villain); // 'Joker'
// console.log(myQuote); // [Function: myQuote]

'---------------------------------------------------------';

// var a = 1;
// function outer() {
//   console.log(a);
//   function inner() {
//     console.log(a);
//     var a = 2;
//   }
//   inner();
// }
// outer();


// function outer() {
//   var a;
//   console.log(a);
//   function inner() {
//     var a;
//     console.log(a);
//     a = 2;
//   }
//   inner();
// }
