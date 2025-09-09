/**diff between parameters and argument.
 * parameters - empty boxes waiting to be asigned values. 
 * argument - values inside the parameters.
 */

// Question 1
function calculateArea(length, width) {
  return length * width;
}
const result=calculateArea(5,10)
console.log(result);

/**
 * The length & width are the parameters.
 * 5 & 10 are the arguments.
 */
//Question 2

function calculateArea(length=1, width=1) {
    return length* width;
}
console.log (calculateArea());
// the modified function with default value of 1 doesn't have an argumnet.

console.log (calculateArea(8))
/** using default values is useful because they prevent errors.
 *  when use calculatearea with no arguments, it results to use the default values. e.g. length=1 width=1.
 */


//Questions From The TM//
// Questions 2A- Why do  we have 2 functions called calculateArea?
// Answer : 

//Questions 2B- And can we have functions with the same name?
//Answer : Js execution order is left to right abd top to bottom,the reson for having a second calculatarea is 
//         so as js can execute the second one or one at the bottom.

//Question 2C - If yes, what are the implications?
//Answer: js will execute the second one or one at the bottom. 
//       can also add errors as your redefining the function more than once.

//Question 3

function greet(name){
    return`hello,${name}`
}

function processGreeting(greetFunction,namefunction){
    return greetFunction(namefunction);
}
console.log(processGreeting(greet,"Daniel"))
/**
 * js uses the first class functions like the greet as an argument.this argument has been used to
 *  pass the function `processGreeting`.
 *  */

//Question 4.
/*Rewriting greet function as an arrow function. */


const greetArrow = (name)=>`hello,${name}`
console.log(greetArrow("Daniel"));
/**
 * Arrow Fuction is a syntax
 * Arrow functions provide a cleaner function than regular functions e.g question 3 above.
 */

//Question 5//
function fetchData(callback){
    console.timeLog("fetchingData")
}



//What’s Happening:(Explainer)
/** fetchData(callback) waits 1 second (simulating a delay like an API call).
After the delay, it fetches some data (mocked here as a JS object).
It then calls the callback function, passing the fetched data to it.






//Question 7 //
/** Hoisting is JavaScript's default behaviour of moving declarations to the top.
 
/** var is hoisted, but not the assignment; therefore, myVar is hoisted, 
   but it does not contain anything, hence it returns undefined.

/** Function declarations are fully hoisted, and therefore, the variable can be used before it has 
 * been declared, which is why B behaves differently and outputs Hello from a function!
 */


function introducePerson (name, age){
    return `Hi, I'm ${name} and I'm ${age} years old`
}
