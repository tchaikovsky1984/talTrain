// indexed data structures ====================================

// two types of indexed data structures:
//    1. arrays 
//    2. typed arrays

const arr1 = new Array(1, "a", true);
const arr2 = [2, "b", false];

console.log(arr1);
console.log(arr2);

console.log(arr1.length);
console.log(arr1.indexOf(1));

const obj = {};
obj.prop = arr1;

const obj2 = { prop: arr2 };

console.log(obj);
console.log(obj2);

const arr3 = [3];
const arr4 = Array(3);

for (let element of arr4) {
  console.log(element);
}

// arr3 and arr4 are not equivalent

console.log(arr3);
console.log(arr4);

console.log(arr1[0]);
console.log(arr1["length"]);

// anything but an int passed as an index will result in a 
// property being created in the object representing the array

for (let element of arr1) {
  console.log(element);
}

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// lets try bubblesort

let arr = new Array(10);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 10);
}

console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let t = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = t;
    }
  }
}

console.log(arr);

// grouping

const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

const res = Object.groupBy(inventory, (obj) => obj.type);

console.log(res);

// splice
// removes arg2 no. of elements from arg1 index adds arg3 onwards
// after arg1 index
// doesnt allow negative indices

let rem = arr.splice(2, 2);
console.log(rem);
console.log(arr);

arr.splice(2, 1, "an", "am")
console.log("here");
console.log(arr);

arr.splice(2, 0, ["a", "b"]);
console.log(arr);

// slice
// simpler splice

let portion = arr.slice(1, 4);
console.log(portion);
console.log(arr);


