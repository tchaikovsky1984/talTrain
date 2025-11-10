// constraints

// sometimes we may want to run a function only on objects that 
// has certain props

interface LengthHaving {
  length: number;
}

function loggingIdent<T extends LengthHaving>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let arr: number[] = [1, 2, 3];
console.log(loggingIdent(arr));

// consolel.log(loggingIdent(3));

console.log(loggingIdent("abcd"));

// type paramets in generic constraints

// we can declare a type param that is constrained by another type
// param

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProp(x, "a"));
console.log(getProp(x, "b"));
