function configurable(val: boolean) {
  return function(tar: any, propK: string, desc: PropertyDescriptor) {
    desc.configurable = val;
  };
}


class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get dist() {
    return Math.round(Math.sqrt(this._x * this._x + this._y * this._y));
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }

}

let p: Point = new Point(1, Math.sqrt(3));
console.log(p.x);
console.log(p.y);
console.log(p.dist);
