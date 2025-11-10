//tuples

// used when array's shape and type of specific positions are known


type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  // destructuring tuple syntax
  const [str, num] = pair;
  console.log(pair[0]);
  console.log(pair[1]);
  console.log(str);
  console.log(num);
}

doSomething(["ab", 1]);

// tuples types are like interfaces with a specific numerical 
// prop length

interface StringNumberPairInt {
  length: 2;
  0: string;
  1: number;
}

let a: StringNumberPairInt = {
  length: 2,
  0: "abc",
  1: 1,
}

console.log(a);
console.log(a[1]);
console.log(a[0]);
console.log(a["length"]);

// optional props in tuples

type Either2dOr3d = [number, number, number?];

function setCoord(coord: Either2dOr3d) {
  console.log(coord);
}

setCoord([1, 1]);
setCoord([1, 2, 3]);

