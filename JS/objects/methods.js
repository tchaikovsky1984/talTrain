let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Hello!

/*
 * let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
*/

/*
 * user = {
  sayHi: function() {
    alert("Hello");
  }
};

user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};
*/

let user1 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user1.sayHi(); // Ilya

//calc

let calc = {
  a: 0,
  b: 0,
  read: function(x, y) {
    this.a = x;
    this.b = y;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

calc.read(1, 2);
console.log(calc.sum());
console.log(calc.mul());

