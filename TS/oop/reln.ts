// class reln

// in most cases, in tyepscript, classes are compared structurally
// (the same as otehr types). for example, these two can be used
// place of each other
//
// if it walks like a duck and quacks like a duck then it is
// a duck

class Point1 {
  x: number = 0;
  y: number = 0;
}

class Point2 {
  x: number = 1;
  y: number = 1;
}

const p: Point1 = new Point2();
console.log(p);

const p1: Point2 = new Point1();
console.log(p1);

// subtype relations exists b/w classes even if there's no explicit
// inheritance

class Person {
  name: string;
  age: number;
}

class Employee {
  name: string;
  age: number;
  salary: number;
}

const p2: Person = new Employee();
// cannot send a smaller type into a larger one like this:
// const p3: Employee = new Person();


