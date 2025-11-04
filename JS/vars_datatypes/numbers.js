// numbers ===========================================

let billion = 1000000000;

billion = 1e9;

let micro = 1e-6;

console.log(micro);
console.log(billion);

console.log(1e-3 === 1 / 1000);

// binary octal and hexadecimal numbers

let bina = 0b10101;
let octa = 0o25;
let hexa = 0x15;

console.log(bina);
console.log(octa);
console.log(hexa);

console.log(bina == octa);

let num = 21;

console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));

// two dot calling
// 1234..toString()
// as 1234. may be construed as 1234 point and then decimal value


// rounding works as obivous
// Math.floor(), ceil(), round(), trunc()

