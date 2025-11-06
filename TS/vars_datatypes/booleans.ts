// booleans
//
// you can declare like this
let True: boolean = true;
let False: boolean = false;

// you can also declare without specifying type causing the dtype 
// to default to any (without type checking) and tsc will infer
// the type
let isTrue = true;

console.log(typeof (True));
console.log(typeof (isTrue));

let truths: boolean[] = [True, False];

function randomIdx(): number {
  return Math.round((Math.random()));
}

let idx1: number = randomIdx();
let idx2: number = randomIdx();

console.log(idx1 + " " + truths[idx1]);
console.log(idx2 + " " + truths[idx2]);
console.log(truths[idx1] || truths[idx2]);
