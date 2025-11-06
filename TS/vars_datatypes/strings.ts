// strings 

let sq: string = 'sq';
let dq: string = "dq";
let bt: string = `bt`;

console.log(sq);
console.log(dq);
console.log(bt);

function giveSum(a: number, b: number): string {
  return `Sum of ${a} + ${b} = ${a + b}`;
}

console.log(giveSum(2, 54));

function isPalin(s: string): boolean {
  let l: number = 0;
  let r: number = s.length - 1;
  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(isPalin("racecar"));
console.log(isPalin("abcd"));

let sample: string = "abcdef";

console.log(sample[sample.length - 1]);
