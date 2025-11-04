// symbols =======================================

// symbols represent unique identifiers

let id = Symbol('id');

let id1 = Symbol('id');

console.log(id1 == id);

// dont auto convert to string

// console.log(id1) error

console.log(id.toString());
console.log(id.description);

let user = {
  name: "john"
};

user[id] = 1;

console.log(user[id]);

let user1 = {
  name: "john2",
  [id]: 123
};

console.log(user1.toString());

// symbols are skipped in for .. in ..

for (entry in user1) {
  console.log(entry);
}

// Object.keys() also ignores symbols
// Object.assing copies both string and suymbol properties

