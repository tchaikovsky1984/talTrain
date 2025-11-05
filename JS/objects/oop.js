// OOP ==============================================

// we can have quite OOP like programming here with this

let ladder = {
  step: 0,
  up: function() {
    this.step++;
  },
  down: function() {
    this.step--;
  },
  showStep: function() {
    console.log(this.step);
  }
}

ladder.showStep();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();

// constructors help us make many different objects of the same
// protype many times using the keyword new

// the comments in the function are what happens implicitly when
// its executed with a new
function User(name) {
  // this = {];
  this.name = name;
  this.isAdmin = false;
  // return this;
}

let user = new User("John");

console.log(user);

// can also use function expressions here

let user2 = new function() {
  this.name = "Jane";
  this.isAdmin = false;
}

console.log(user2);

// if you return a primitive in a constructor it is ignored
// if you return an object then the object is returned instead of
// this.

// adding function props in constructors

function Admin(name) {
  this.name = name;
  this.isAdmin = true;
  this.sayHi = function() {
    console.log("My name is: " + this.name);
  };
}

let admin = new Admin("Jack");
console.log(admin);

admin.sayHi();
