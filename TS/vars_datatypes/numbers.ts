// numbers

let big_num: number = 1000000000;

let big_num2: number = 1e9;

console.log(big_num === big_num2);

let b: number = 0b0101;
let o: number = 0o5;
let h: number = 0x5;

console.log(h);
console.log(b == o);
console.log(o == h);

console.log(b.toString(10));

const min: number = 1;
const max: number = 10;

console.log(Math.round(Math.random() * (max - min)) + min);

function genRandom(m: number, M: number): number {
  if (m > M) {
    m = M + m;
    M = m - M;
    m = m - M;
  }
  return (Math.round(Math.random() * (M - m)) + m);
}

console.log(genRandom("abc", 2)); // error in tsc

function printCoord(pt: { x: number, y: number }) {
  let x: number = pt.x;
  let y: number = pt.y;
  let dist: number = Math.sqrt(x * x + y * y);
  console.log(dist);
  let x5: number = x;
  let y5: number = y;
  while (x5 % 5 != 0)
    x5--;
  while (y5 % 5 != 0)
    y5--;
  let str: string = "";
  for (let i: number = y5; i - y5 < 5; i++) {
    str = ""
    for (let j: number = x5; j - x5 < 5; j++) {
      if (i == x && j == y) {
        str = str + "** ";
      }
      else { continue; }
      if (((i == y5) || (i - y5 == 4)) && ((j == x5) || (j - x5 == 4))) {
        str = str + i + j + " ";
      }
      else {
        str = str + "   ";
      }
    }
    console.log(str);
  }
}

printCoord({ x: 4, y: 8 });
