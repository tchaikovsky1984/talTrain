// narrowing dtypes using typeof

// null is also an object :(
function printAll(strs: string | string[] | null): void {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  }
  else if (typeof strs === "string") {
    console.log(strs);
  }
  else {
  }
}

// narrow it down using its truthiness value
// if coereces values to boolean and non truthie values are 
// considered false

console.log(Boolean(""));
console.log(Boolean(null));
console.log((Boolean(undefined)));
console.log(Boolean(0));

function printAllCheck(strs: string | string[] | null): void {
  if (strs && typeof strs === "object") {
    console.log(strs.join(", "));
  }
  else if (typeof strs === "string") {
    console.log(strs);
  }
  else {
    console.log("null");
  }
}

printAllCheck(["abd", "cef"]);
printAllCheck("abc");
printAllCheck(null);

function scale(arr: number[] | undefined, s: number): number[] | undefined {
  if (!arr) {
    return arr;
  }
  else {
    return arr.map((x) => x * s);
  }
}

console.log(scale([1, 2, 3, 4], 2));

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

type Human = { fly?: () => void, swim?: () => void };

function moveNew(animal: Bird | Fish | Human): void {
  if ("swim" in animal) {
    console.log("Bird or Human");
  }
  else {
    console.log("Fish or Human");
  }
}

// instanceof narrowing

function logVal(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }
  else {
    console.log(x.toUpperCase());
  }
}

// type predicates
// they are the tell the compiler that the param is a specific type
// other implementations of type narrowing may be okay
// but this is to confirm with the compiler and ensure the code is
// okay to execute

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

