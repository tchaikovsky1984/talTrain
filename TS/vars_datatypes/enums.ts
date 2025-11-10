// Enums


// while literal type unions disappear completely once compiled 
// into js. Enums stay and can be iterated over and accesd by the 
// enum collection name

// numeric ENUMs
enum Direction {
  Up = 1,
  Down, // auto increment
  Left,
  Right
}

enum Direction_AutoInit {
  UpA, //starts at 0
  DownA, // auto increment
  LeftA,
  RightA
}

// access and type declaration

function printDirection(dirn: Direction): void {
  console.log(dirn);
}

printDirection(Direction.Up);

// assigning expressions to ENUMs is allowed as long as the
// uninitialised ENUMs come before ENUMs initialised completely
// without numeric constants that CANNOT BE calculated at 
// compile time.

function getSomeValue(): number {
  return Math.round(Math.random() * 9) + 1;
}

// this is allowed
enum E {
  A = 5,
  B,
  C = getSomeValue()
}

// this is not allowed
/*
 * enum E {
 * A = getSomeValue(),
 * B
 * }
 */

// string enums

enum Dirn {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Hetrogeneous ENUMs are allowed but discouraged unless you're
// being clever.

// interesting
for (let member in E) {
  console.log(member);
  console.log(typeof (member));
}

let a: number = 2;
const b: number = 3;
var c: number = 4;

enum check {
  A = a,
  B = b,
  C = c,
}

for (let member in check) {
  console.log(member);
  console.log(typeof (member));
}

// union enum and enum member types

// if all enum members' values are constant and known at compile
// time then they become types as well

enum ShapeKind {
  Circle,
  Sqaure,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Sqaure;
  side: number;
}

/*
let p: Circle = {
  kind: ShapeKind.Sqaure,
  radius: 100,
};
*/

function whatIsIt(kind: ShapeKind) {
  console.log(kind == ShapeKind.Circle ? "Circle" : "Sqaure");
}

whatIsIt(ShapeKind.Circle);

// enums are real objects and exist at runtime

enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }): number {
  return obj.X;
}

console.log(f(E));

// reverse mapping from values to enum names also exists

let x = E.X;
console.log(E[x]);

