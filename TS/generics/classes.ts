// generic classes

// have similar shape to interfaces

class GenericNumber<NumType> {
  zeroVal: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenNumber = new GenericNumber<number>();
myGenNumber.zeroVal = 0;
myGenNumber.add = function(x, y) {
  return x + y;
};

let stringNum = new GenericNumber<string>();
stringNum.zeroVal = "";
stringNum.add = function(x, y) {
  return x + y;
};

console.log(stringNum.add(stringNum.zeroVal, "ab"));
console.log(myGenNumber.add(myGenNumber.zeroVal, 22));

// class types in generics

// factories have this

function create<T>(c: { new(): T }): T {
  return new c();
}

let a = create<GenericNumber<number>>(GenericNumber<number>);
a.zeroVal = 0;
a.add = function(x, y) {
  return x + y;
}

console.log(a.add(a.zeroVal, 34));
