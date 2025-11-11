// exclude<union type, excluded members>

// constructs a type by excluding excluded members from union types

type T0 = Exclude<"a" | "b" | "c", "a">;
type Shape =
  | { kind: "circle"; rad: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; x: number; y: number; z: number };

type T1 = Exclude<Shape, { kind: "circle" }>;

let a: T1 = { kind: "square", side: 4 };
// let b: T0 = "a"; //error
let b: T0 = "b";

