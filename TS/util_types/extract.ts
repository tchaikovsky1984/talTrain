// extract<union type, excluded members>

// constructs a type by extracting members from union types

type T0 = Extract<"a" | "b" | "c", "a">;
type Shape =
  | { kind: "circle"; rad: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; x: number; y: number; z: number };

type T1 = Extract<Shape, { kind: "circle" }>;

let a: T1 = { kind: "circle", rad: 4 };
// let b: T0 = "a"; //error
let b: T0 = "a";

