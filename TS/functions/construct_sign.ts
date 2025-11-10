// 1. Define the interface with the Construct Signature
interface CarConstructor {
  new(make: string, model: string): CarInstance;
}

// 2. Define the instance type (the actual object created)
interface CarInstance {
  make: string;
  model: string;
  drive(): void;
}

// 3. A function that takes a Car Constructor/Class
function buildCar(ctor: CarConstructor, make: string, model: string): CarInstance {
  // The Ctor (class) must be instantiable with `new`
  return new ctor(make, model);
}

// 4. An actual class that matches the CarConstructor type
class Sedan implements CarInstance {
  constructor(public make: string, public model: string) { }
  drive() { console.log("Vroom"); }
}

// Use the factory function
const myCar = buildCar(Sedan, "Honda", "Accord");
// TypeScript verifies that Sedan is a valid CarConstructor
