const a1: number[] = [1, 2, 3];
const a2: Array<number> = [4, 5, 6];

console.log(a1);
console.log(a2);

console.log(a1.length);
console.log(a2.length);

const obj1 = {};
obj1["prop"] = a1;

const a3: number[] = Array(3);
const a4: number[] = [3];

console.log(a3);
console.log(a4);

for (let element of a1) {
  console.log(element);
}

type Eatable = { name: string, type: string };
const pantry: Eatable[] = [
  { name: "apple", type: "fruit" },
  { name: "banana", type: "fruit" },
  { name: "potato", type: "root" },
]

console.log(pantry);

