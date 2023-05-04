// Presentation example: 
var restaurant = "Krusty Krab 🍔";

function FineDining() {
  var meal = "Krabby Newburg 🍖";
  console.log("Table for how many?");
}

function Breathing() {
  var breath = "😤"; 
  console.log(breath);
}

FineDining();
Breathing(); 

let name = "SpongeBob🧽";

{
    console.log("I must know your " + name);
    let name = "Beef Wellington?";
}


// https://blog.codeanalogies.com/2017/11/22/how-javascript-variable-scoping-is-just-like-multiple-levels-of-government/


// example 1
// https://pythontutor.com/visualize.html#code=var%20teacher%20%3D%20%22Dimitris%22%3B%0A%0Afunction%20greetClass%28%29%20%7B%0A%20%20var%20teacher%20%3D%20%22Antonis%22%3B%0A%20%20console.log%28%22Hello%20class!%22%29%3B%0A%7D%0A%0Afunction%20ask%28%29%20%7B%0A%20%20var%20question%20%3D%20%22Why%3F%22%3B%20//%20Ain't%20nothin'%20but%20a%20heartache%0A%20%20console.log%28question%29%3B%0A%7D%0A%0AgreetClass%28%29%3B%0Aask%28%29%3B&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

var teacher = "Dimitris";

function greetClass() {
  var teacher = "Antonis";
  console.log("Hello class!");
}

function ask() {
  var question = "Tell me why!"; // (ain't nothin' but a heartache)
  console.log(question);
}

greetClass(); // Hello class!
ask(); // Tell me why!

// example 2
// https://pythontutor.com/visualize.html#code=var%20teacher%20%3D%20%22Dimitris%22%3B%0A%0Afunction%20greetClass%28%29%20%7B%0A%20%20%20%20teacher%20%3D%20%22Antonis%22%3B%0A%20%20%20%20topic%20%3D%20%22JavaScript%22%3B%0A%20%20%20%20console.log%28%22Hello%20class!%22%29%3B%0A%7D%0A%0Ateacher%3B%20%0Atopic%3B&cumulative=false&curInstr=3&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

var teacher = "Dimitris";

function greetClass() {
  teacher = "Antonis";
  topic = "JavaScript 🚀";
  console.log("Hello class!");
}

teacher;
topic;

// example 3
// https://pythontutor.com/visualize.html#code=var%20teacher%20%3D%20%22Dimitris%22%3B%0A%0Afunction%20greetClass%28%29%20%7B%0A%20%20var%20teacher%20%3D%20%22Alex%22%3B%0A%0A%20%20function%20ask%28question%29%20%7B%0A%20%20%20%20console.log%28teacher,%20question%29%3B%0A%20%20%7D%0A%0A%20%20ask%28%22Why%3F%22%29%3B%0A%7D%3B%0A%0AgreetClass%28%29%3B%0Aask%28%22%3F%3F%3F%22%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

var teacher = "Dimitris";

function greetClass() {
  var teacher = "Alex";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
};

greetClass();
ask("???");
