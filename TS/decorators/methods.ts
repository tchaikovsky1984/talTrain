function enumerate(val: boolean) {
  return function(target: any, propKey: string, desc: PropertyDescriptor) {
    desc.enumerable = val;
  };
}


class Greeter {
  greeting: string;
  constructor(str: string) {
    this.greeting = str;
    return this;
  }

  @enumerate(true)
  greet(): string {
    return "hello " + this.greeting;
  }
}

let g: Greeter = new Greeter("abc");
console.log(g.greet());

for (let prop in g) {
  console.log(prop);
}
