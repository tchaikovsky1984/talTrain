// hybrid types are types that show more than 1 behaviour at a time

// 1. call sign + prop

interface Counter {
  (start: number): string;
  curr: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter: Counter = function(start: number): string {
    counter.curr = start;
    return "Counter set to: " + counter.curr;
  } as Counter;

  counter.curr = 0;
  counter.reset = function() {
    counter.curr = 0;
  };

  return counter;

}

// 2. call sign + construct sign

interface HybridCreator {
  (input: string): number;
  new(input: number): { value: number, type: string };
}

class Thing {
  value: number;
  type: string;

  constructor(input: number) {
    this.value = input;
    this.type = "Constructed";
  }
}

function getHybridCreator(): HybridCreator {
  let hybrid = function(input: string): number {
    console.log("Called as fucntion with string: " + input);
    return input.length;
  } as any; // have to do this as any to as we cant do as HybridCreator or ts will freak out since it doesnt have the constructor prop

  // Object.setPrototypeOf(hybrid, Thing);
  // post es2015 we use this
  // pre es2015 was used:
  hybrid.__proto__ = Thing.prototype;
  return hybrid as HybridCreator;
}

const Creator = getHybridCreator();

const res = Creator("hello");

console.log(res);

const inst = new Creator(42);
console.log(inst.value);
console.log(inst.type);


// 3. call sign call sign hybrid (overloading)

interface Logger {
  (message: string): void;
  (level: 'err' | 'warn', message: string): void;
}

function getLogger(): Logger {
  const logger = function(a: string, b?: string): void {
    if (b) {
      const lvl = a.toUpperCase();
      console.log(lvl + ": " + b);
    }
    else {
      console.log(a);
    }
  } as Logger;
  return logger;
}

const log: Logger = getLogger();
log("err", "i am not here");
log("i am here");
