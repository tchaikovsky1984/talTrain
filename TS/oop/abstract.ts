// abstract classes

// abstract classes vs interfaces
// 1. to define a base class | to define the shape or contract
// 2. can contain implementation | cannot contain implementation
// 3. can define a constructor | cannot define a constructor
// 4. can contain initialised fields | can only contain prop sign
// 5. can use access modifiers | members are implicitly public
// 6. extends | implements
// 7. no multiple inheritance | a class can implement mult interf
// 8. can contain abstract members | all members are abstract

abstract class Vehicle {
  public speed: number = 0;

  start(): void {
    console.log("Enging starting ...");
  }

  abstract drive(): void;
}

class Car extends Vehicle {
  drive(): void {
    console.log("Car is driving");
  }
}

let myCar: Car = new Car();
myCar.start();
myCar.drive();


interface Flyable {
  alt: number;

  fly(height: number): boolean;
}

class Plane implements Flyable {
  alt: number = 0;

  fly(height: number): boolean {
    this.alt = height;
    return true;
  }
}

let myPlane: Plane = new Plane();
console.log(myPlane.alt);
console.log(myPlane.fly(100));
console.log(myPlane.alt);
