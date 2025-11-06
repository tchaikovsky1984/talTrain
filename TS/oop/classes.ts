class Point {
  readonly x: number;
  readonly y: number;
  readonly z: number;

  constructor(a: number, b: number, c: number) {
    this.x = a;
    this.y = b;
    this.z = c;
  }

  distFromOrigin(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
  }

  calcDist(p2: Point) {
    return Math.sqrt(Math.pow(this.x - p2.x, 2) + Math.pow(this.y - p2.y, 2) + Math.pow(this.z - p2.z, 2));
  }

  display(): void {
    console.log(`x: ${this.x}\ny: ${this.y}\nz: ${this.z}`);
  }

}

let pt1 = new Point(1, 2, 3);
pt1.display()
let pt2 = new Point(3, 2, 1);
pt2.display()

console.log(pt1.distFromOrigin());
console.log(pt1.calcDist(pt2));

class FPoint extends Point {
  readonly v: number;

  constructor(a: number, b: number, c: number, d: number) {
    super(a, b, c);
    this.v = d;
  }

  distFromOrigin(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.v, 2))
  }

  calcDist(p2: FPoint): number {
    return Math.sqrt(Math.pow(this.x - p2.x, 2) + Math.pow(this.y - p2.y, 2) + Math.pow(this.z - p2.z, 2) + Math.pow(this.v - p2.v, 2));
  }

  display(): void {
    console.log(`x: ${this.x}\ny: ${this.y}\nz: ${this.z}\nv: ${this.v}`);
  }

}

let pt3 = new FPoint(1, 2, 3, 4);
pt3.display()
let pt4 = new FPoint(4, 3, 2, 1);
pt4.display()

console.log(pt3.distFromOrigin());
console.log(pt3.calcDist(pt4));

// data member props can be declared in the constrcutor like this too 

class PointCopy {

  constructor(readonly x: number, readonly y: number) {
    this.x = x;
    this.y = y;
  }

  showUs(): void {
    console.log(this.x + " " + this.y);
  }

}

let p5 = new PointCopy(3, 4);
p5.showUs();

