// example 1

function ask(question){
    return function holdYourQuestion(){
        console.log(question);
    };
}

var myQuestion = ask("What is closure?");

// .. 

myQuestion();


// example 2 

var teacher = "Dimitris";

var myTeacher = function(){
    console.log(teacher);
}

teacher = "Alex";

myTeacher(); // ??

// example 3

for (var i = 1; i <=3; i++){
    // Alternative solution
    // let j = i
    setTimeout(function(){
        console.log(`i: ${i}`); //   `j: ${j}`
    }, i*1000)
}
