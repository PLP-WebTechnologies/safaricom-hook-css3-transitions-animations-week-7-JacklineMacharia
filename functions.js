// adding two numbers
function add(x, y){
    return x + y
}

let sum = add(3, 5);
console.log(sum);


// multiplying three numbers
function multiply(j, k, l){
    return j*k*l
}

let area = multiply (2, 3, 4);
console.log(area);

// Global and local variable
let global_var = "I am a global variable";

function scope(){
    let local_var = "I am a local variable";
    console.log(local_var);
    console.log(global_var);
}
console.log(global_var);

//example 2
let counter = 0;
function incrementCounter() {
    counter += 1;
    console.log(`Counter inside the function: ${counter}`);
}
incrementCounter();
incrementCounter();
console.log(`Counter outside the function: ${counter}`);
