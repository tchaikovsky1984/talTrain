// generic 

function identity(arg: number): number {
  return arg;
}

//can be generalised with any as:

function iden(arg: any): any {
  return arg;
}

// this loses context with the compiler and we only know that
// any type can be returned

function ident<T>(arg: T): T {
  return arg;
}

console.log(typeof ident(42));

// dealing with generic types

function fault<T>(arg: T): void {
  // wont work cause we dont know if this prop is there in arg
  // console.log(arg.length);
  console.log(arg);
}

function right<T>(arg: T[]): T[] {
  console.log(arg.length);
  console.log(arg);
  return arg;
}

// generic types

let myId: <T>(arg: T) => T = ident;

// can also be written as the call sign of an object

let myID: { <T>(arg: T): T } = ident;


