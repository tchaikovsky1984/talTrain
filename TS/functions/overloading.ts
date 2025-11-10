// overloading functions

// need overload function signatures and then the actual function
// that handles all the scenarios

function makeDate(timestamp: number): Date; // scenario 1: 1 param
function makeDate(m: number, d: number, y: number): Date; // 2: 3 params
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { // handles both
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(1223145);
const d2 = makeDate(5, 5, 2005);
const d3 = makeDate(1, 3, 2022);

console.log(d1);
console.log(d2);
console.log(d3);

// two or more signatures are required to overload a func
// you cant write like this:
/*
 * function fx(x: string): void;
 * function fx(): void{
 * ...
 * }
 *
 * fn();
 */

//the right way would be:

function fx(x: string): void;
function fx(): void;
function fx(x?: string): void {
  if (x) {
    console.log(x);
  }
  else {
    console.log("no");
  }
}

fx("abc");
fx();

function fibo(lim: number, ty: string): void;
function fibo(lim: number): void;
function fibo(lim: number, ty?: string): void {
  if (ty) {
    let a: number = 0;
    let b: number = 1;
    let d: number;
    let count: number = 0;
    while (count < lim) {
      console.log(a);
      count++;
      d = a + b;
      a = b;
      b = d;
      //console.log(`lim: ${lim} count: ${count}`);
    }
  }
  else {
    let a: number = 0;
    let b: number = 1;
    let d: number;
    while (a < lim) {
      console.log(a);
      d = a + b;
      a = b;
      b = d
    }
  }
}

fibo(20);
fibo(20, "str");
