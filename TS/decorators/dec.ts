// decorators

// use the @expression form, where expression must evaluate to a
// function thaty will be callled at runtime with info about the
// decorated declaration

/* for example for @sealed we would write:
 * function sealed(target){
 *  ...
 * }
 */

function logExec(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log("calling: " + propertyKey + " with params: " + JSON.stringify(args));
    const res = originalMethod.apply(this, args);
    console.log("Applied");
    return res;
  }
  return descriptor;
}

function logCreate(target: any) {
  console.log("logging creation");
}

@logCreate
class Calc {

  constructor() {
    console.log("Constructing...");
  }

  @logExec
  add(a: number, b: number): number {
    return a + b;
  }
}

let c: Calc = new Calc();
console.log(c.add(1, 2));

// decorator factories
// can be used to pass arguments to decorators

function first(str: string): any {
  console.log("first(): eval");
  return function(target: any, propertyKey: string, desc: PropertyDescriptor): any {
    const og = desc.value;
    console.log("done");
    // this is to replace the decorated function with this function
    // even if we dont this returns undefined and the decorated fn
    // is not replaced
    // thus its ran as is and produces the same output
    /*   desc.value = function(): void {
         console.log(str);
         console.log(propertyKey);
         og.apply(this);
       };
       return desc; */
  }
}


class ExampleClass {
  @first("hi")
  method(): void {
    console.log("has it?");
  }
}

let ca: ExampleClass = new ExampleClass();
ca.method();

// eval:
// 1. all dec applied for each instance member
// 2. all dec applied for each static member
// 3. param dec applied for the constructor
// 4. class dec applied for the class

function destructive_decorator(target: any, propKey: string, desc: PropertyDescriptor): PropertyDescriptor {
  desc.value = function() {
    console.log("Overwritten ahah");
  };
  return desc;
}

class AnotherOne {
  @destructive_decorator
  method(): void {
    console.log("Not overwritten");
  }
}

let a: AnotherOne = new AnotherOne();
a.method();
