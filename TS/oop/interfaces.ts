// interfaces

// interfaces can be used as types too
// can be used like type aliases
// but also: 1. can be extended 2. can have new fields added to them

type Person = {
  name: string,
  age: number,
};

interface P {
  name: string,
  age: number,
};

let p1: Person = { name: "a", age: 21 };
let p2: P = { name: "a", age: 21 };

console.log(typeof p1);
console.log(typeof p2);

function areEqualTypes(p1, p2) {
  // shallow check
  let flag: boolean = true;
  for (const prop in p1) {
    if (prop in p2) {
      continue;
    }
    else {
      flag = false;
      break;
    }
  }
  for (const prop in p2) {
    if (prop in p1) {
      continue;
    }
    else {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(areEqualTypes(p1, p2));

let p3: { name: string } = { name: "a" };

console.log(areEqualTypes(p1, p3));

// deep check
/**
 * Recursively checks if two values are of the same type and deeply equal 
 * if they are objects or arrays.
 */
function areSameTypeAndEqual(a: any, b: any): boolean {
  // --- Basic Type Check ---
  const typeA = typeof a;
  const typeB = typeof b;

  if (typeA !== typeB) {
    return false;
  }

  // Handle primitive types and null (null is type 'object', but handled here)
  if (typeA !== 'object' || a === null || b === null) {
    return a === b;
  }

  // --- Object/Array Deep Check ---

  // Check if both are Arrays
  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);

  if (isArrayA !== isArrayB) {
    return false;
  }

  // If both are arrays
  if (isArrayA) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      // Recursive call for each element
      if (!areSameTypeAndEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  // If both are non-array objects (plain objects or custom classes)
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Check key length
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check each key and its value recursively
  for (const key of keysA) {
    // Check if the property exists in b, and recursively check values
    if (!b.hasOwnProperty(key) || !areSameTypeAndEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(areSameTypeAndEqual(p1, p2));
console.log(areSameTypeAndEqual(p1, p3));

// extending interfaces

interface Shape {
  width: number,
  height: number,
};

interface Square extends Shape {
  sideLength: number,
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};

console.log(square);

// blueprint for objects and classes

interface Individual {
  firstName: string,
  lastName: string,
  age?: number,

  getFullName(): string,
}

let me: Individual = {
  firstName: "A",
  lastName: "B",
  age: 30,
  getFullName: function(): string {
    return this.firstName + " " + this.lastName;
  }
};

console.log(me.getFullName());

class IndividualImpl implements Individual {
  firstName: string;
  lastName: string;
  age?: number;

  constructor(f: string, l: string, n?: number) {
    this.lastName = l;
    this.firstName = f;
    if (n) {
      this.age = n;
    }
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

let me2: IndividualImpl = new IndividualImpl("A", "B");
console.log(me2.getFullName());
