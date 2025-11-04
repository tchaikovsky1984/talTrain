// functions =================================

function showMess() {
  console.log("Hi everyone");
}

showMess();

// functions have full access to outer variables and can modify 
// them too

let username = "John";

function greet() {
  console.log("hi " + username);
  username = "Jane";
}

console.log(username);
greet();
console.log(username);

function message(from, text = "no text given") {
  return from + " : " + text;
}

console.log(message("Annie"));


function message2(from, text) {
  //old JS
  text = text ?? "no text given"; // text = text || "no text given"
  return from + " : " + text;
}

console.log(message2("Annie"));

// functions closures

// The outer function defines a variable called "name"
const pet = function(name) {
  const getName = function() {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"

// arguments object

function demo() {
  return arguments[0] + arguments[1] + arguments[2];
}

console.log(demo(1, 2, 3));

// rest params

function demo2(char, ...lit) {
  let str = "";
  for (l of lit) {
    str = str + char + l;
  }
  return str;
}

console.log(demo2(",", 'a', 'b', 'c', 'd'));

// function expressions

const square = function(num) {
  return num * num;
};

console.log(square(4));

// IIFEs
// -----
// used to give var variables block scope

(function(name) {
  var special = "hi " + name;
  console.log(special);
})();

// calling special outside is not possible

//functions are also hoisted

// arrow functions

const a = ["Hydrogren", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function(s) { return s.length; });

console.log(a2);

const a3 = a.map((s) => s.length);

console.log(a3);

// no separate this

function Person() {
  const self = this;
  self.age = 0;
  setInterval(function() {
    self.age++;
    // cannot say this.age and that would refer to the this of 
    // passed function
  }, 100);
}

// instead

function PersonNew() {
  this.age = 0;
  setInterval(() => { this.age++; }, 100);
}
