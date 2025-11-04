// switch case ======================================

/*
 * switch(x){
 *  case 'val1': 
 *    ...
 *    [break]
 *  case 'val2':
 *    ...
 *    [break]
 *  default:
 *    ...
 *    [break]
 * }
 */

// both switch and case allow arbitrary expressions

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("yes");
    break;
  default:
    console.log("no");
}

// case fall through is also implemented

a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    break;

  default:
    console.log('The result is strange. Really.');
}

// type matters and the comparision is always strict

let arg = "3";

switch (arg) {
  case '0':
  case '1':
    console.log("one or zero");
    break;
  case 3:
    console.log("never runs");
    break;
  default:
    console.log("nope");
}

