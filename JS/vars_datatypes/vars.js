// let =============================================

let message;
// let allows declaration without assignment

message = "hello";
console.log(message);

let greeting = "hi";
// let also allows declaration and assignment together
console.log(greeting);

// multiple declarations on one line too
let user = "John", age = 25;
// not recommended due to less readability

// other styles
let user1 = "John",
  age1 = 25;

let user2 = "John"
  , age2 = 25;

console.log(user);
console.log(age);
console.log(user1);
console.log(age1);
console.log(user2);
console.log(age2);

/*
 * use strict
 * ----------
 *  Its possible to declare and assign a variable
 *  without actually declaring it, through mere assignment.
 *
 *  num = 5; // will work fine. num will be created if it didnt exist
 *
 *  To prevent this, we can add "use strict" to the script.
 *
 *  "use strict";
 *  num = 5; // this will throw an error (num not defined)
 *
 */

// const ============================================= 

// const declarations must be assigned values. they cant be
// declared without values

const myBirthday = 'dd.mm.yyyy';

// cannot reassign this variable
// myBirthday = 'd1.m2.yy34' // error, can't reassign the constant

console.log(myBirthday);

/*
 * uppercase constants
 * -------------------
 *  Widespread practice to name tedious constants that are known
 *  before execution using capital letters and underscores.
 *
 *  Ex: colour hexcodes.
 */

const COLOR_RED = "#F00";
const COLOR_BLUE = "#00F";
const COLOR_GREEN = "#0F0";

let color = COLOR_BLUE;

console.log(color);

// Only name things that are known before execution with uppercase
// and underscores only. Rest constants in camelCase.
//
// const pageLoadTime = time;
// Here, the variable would be a constant but is not known before
// execution.

// var ============================================= 

// var is quite similar to let. In most cases, can be used inter-
// changibly. Internally, though, var is quite different from let

// var allows declarations without assignment and redeclarations

// Its not much utilised in recent code.

let say = "HI";
var speak = "HI";

console.log("let: " + say)
console.log("var: " + speak)

// var has no block scope. They are either block-scoped or 
// function-scoped.

if (true) {
  var test = true;
  let test1 = false;
}
console.log(test);

// console.log(test1); error, test1 is not defined

// same goes with loops

for (var i = 0; i < 10; i++) {
  var one = 1;
  // also var redeclaration does not result in errors
}

// vars can be declared after their usage due to their fucntion-
// scoped and global-scoped nature.

function sayHi() {
  // its the same as having it here
  // This behaviour is called hoisting.

  // var phrase;
  phrase = "Hello";

  console.log(phrase);

  //its also the same as:
  //code blocks are ignored completely
  //if (false){
  //  var phrase;
  //}

  var phrase;
}
sayHi();

/*
 * IIFEs
 * -----
 * var variables are not block-scoped. Earlier, when there was 
 * no let or const, they used IIFEs to construe var variables into
 * block-scoped variables.
 *
 * Unnamed functions that are called immediately to contain var
 * variables.
 */

var phrase = "Hello";

(function() {
  var phrase = "Hi";
  console.log(phrase);
})();

console.log(phrase);

// ways to create IIFEs

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();
