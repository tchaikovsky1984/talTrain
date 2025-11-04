// strings ======================================

// text is stored as strings. no separate type for characters
// the internal format is always UTF-16, not tied to the page
// encoding.

// single, double quotes or backticks work

let single = 'sq';
let db = "dq";
let backticks = `bt`;

console.log(single)
console.log(db)
console.log(backticks)

// single and double quotes are essentially the same.
// backticks allow us to embed expressions into the string.

function sum(a, b) {
  return a + b;
}

console.log(`a + b = ${sum(1, 2)}`);

// backticks also allow strings to span multiple lines

let guests = `guests:
  * a
  * b
  * c`;

console.log(guests);

// its possible to create mutliline string using the newline
// character

let guestList = "guests:\n * a\n * b\n * c\n";
console.log(guestList);

/*
 * Special Characters
 * ------------------
 *  \t : tabspace
 *  \n : newline
 *  \b : backspace
 *  \f: form feed
 *  \v: vertical tab
 */

// strings have a property length

console.log(guestList.length);

console.log(guests[0]);
console.log(guests.at(0));

console.log(guests[guests.length - 1]);
console.log(guests.at(-1));

// iterate over a string's chars

for (let char of "Hello") {
  console.log(char)
}

let str = "Hi";
// strings are immutable
// cannot be changed
//
// str[0] = 'h'; error

// to achieve the same effect we just create a whole new string and
// assign it to the same var

str = 'h' + str[1];

console.log(str);

let guy = "Amaan";
console.log(guy.toUpperCase());
console.log(guy.toLowerCase());

// searching for a substring
// indexOf() returns index of first occurance of substring or -1 i
// not found

console.log(guy.indexOf("Am"));
console.log(guy.indexOf('z'));

str = "Widget with id";

// to start looking from a specific position

console.log(str.indexOf("id", 2));

// to look for all occurances

let pos = 0;
while (true) {
  let foundPos = str.indexOf("id", pos);
  if (foundPos == -1) break;
  console.log(`found at ${foundPos}`);
  pos = foundPos + 1;
}

//subsstrings

// slice() index arguments
// supports negative indices to count from the back
console.log(str.slice(0, 5)); // does not include 5
console.log(str.slice(2)); // from 2 to end

// substring() index arguments
// same as slice() but order of arguments does not matter
console.log(str.substring(0, 5));
console.log(str.substring(5, 0));

// substr() index and length
// pass index to start substring and length of substring
// supports negative indices
console.log(str.substr(0, 4));

//comparing strings

// lowercase letters are always greater than uppercase
console.log(`a > Z: ${'a' > 'Z'}`);

// diacritical marks are out of order

// ascii
console.log("Z".codePointAt(0));
console.log('z'.codePointAt(0));
console.log('z'.codePointAt(0).toString(16));


// Uppercase the first character

function ucFirst(str) {
  if (str.length > 1) {
    return str.toUpperCase()[0] + str[1];
  }
  else if (str.length == 1) {
    return str.toUpperCase();
  }
  else
    return "";
}

s1 = ucFirst("a")
s2 = ucFirst("av")

console.log("a: " + s1);
console.log("av: " + s2);

// check for spam (if mentioned free and cash)

function isSpam(str) {
  str = str.toLowerCase()
  return ((str.indexOf("free") > 0) || (str.indexOf("cash") > 0));
}

console.log(isSpam('here is FreE casH'));
console.log(isSpam('innocent ad'));

// truncate string

function truncate(str, num) {
  if (num == undefined || str.length <= num)
    return str;
  return str.substr(0, num - 3) + "...";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Anshul"));

