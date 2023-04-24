// example 1 

var teacher = "Kyle";
otherTeacher(); // ??

function otherTeacher() {
    console.log(teacher); // shows undefined because "var teacher" exists in the function scope 
    var teacher = "Suzy";
};


// example 2
// let does not hoist? false

{ 
    teacher = "Dimitris";
    let teacher;
}

var teacher = "Dimitris";

{
    console.log(teacher); // TDZ error!
    let teacher = "Antonis";
}
