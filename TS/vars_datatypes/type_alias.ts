type Point = {
  x: number;
  y: number;
};

function prinCoord(pt: Point) {
  let x: number = pt.x;
  let y: number = pt.y;
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  let dist: number = Math.sqrt(x * x + y * y);
  console.log(dist);
}

prinCoord({ x: 3, y: 4 });

type ID = number | string;

function sayID(id: ID) {
  console.log("ID is: " + id);
}

sayID(2);
sayID("anbc");

// interfaces can also accomplish the same results
// but with another caveat in that they can be extended

interface Pt {
  x: number;
  y: number;
}

function printC(pt: Pt) {
  let x: number = pt.x;
  let y: number = pt.y;
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  let dist: number = Math.sqrt(x * x + y * y);
  console.log(dist);
}

printC({ x: 4, y: 3 });

interface Animal {
  name: string;
}

interface Bear extends Animal {
  lovesHoney: boolean;
}

function createBear(name: string, lovesHoney: boolean) {
  let bear: Bear = { name: "", lovesHoney: false };
  bear.lovesHoney = lovesHoney;
  bear.name = name;
  return bear;
}

type Point3 = Point & { z: number; };
// same can be done with types using this

// type assertions
/*
 * if you want to assert a type 
 * const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
 */

const check = "abcd" as string;

// literal types

let x: "hello" = "hello"; //acceptable

// x = "howdy"; not acceptable

function compare(a: number, b: number): -1 | 0 | 1 {
  return a == b ? 0 : a > b ? 1 : -1;
}

console.log(compare(4, 5));


