var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    Point.prototype.distFromOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    Point.prototype.calcDist = function (p2) {
        return Math.sqrt(Math.pow(this.x - p2.x, 2) + Math.pow(this.y - p2.y, 2) + Math.pow(this.z - p2.z, 2));
    };
    Point.prototype.display = function () {
        console.log("x: ".concat(this.x, "\ny: ").concat(this.y, "\nz: ").concat(this.z));
    };
    return Point;
}());
var pt1 = new Point(1, 2, 3);
pt1.display();
var pt2 = new Point(3, 2, 1);
pt2.display();
console.log(pt1.distFromOrigin());
console.log(pt1.calcDist(pt2));
var FPoint = /** @class */ (function (_super) {
    __extends(FPoint, _super);
    function FPoint(a, b, c, d) {
        var _this = _super.call(this, a, b, c) || this;
        _this.v = d;
        return _this;
    }
    FPoint.prototype.distFromOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.v, 2));
    };
    FPoint.prototype.calcDist = function (p2) {
        return Math.sqrt(Math.pow(this.x - p2.x, 2) + Math.pow(this.y - p2.y, 2) + Math.pow(this.z - p2.z, 2) + Math.pow(this.v - p2.v, 2));
    };
    FPoint.prototype.display = function () {
        console.log("x: ".concat(this.x, "\ny: ").concat(this.y, "\nz: ").concat(this.z, "\nv: ").concat(this.v));
    };
    return FPoint;
}(Point));
var pt3 = new FPoint(1, 2, 3, 4);
pt3.display();
var pt4 = new FPoint(4, 3, 2, 1);
pt4.display();
console.log(pt3.distFromOrigin());
console.log(pt3.calcDist(pt4));
var PointCopy = /** @class */ (function () {
    function PointCopy(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    PointCopy.prototype.showUs = function () {
        console.log(this.x + " " + this.y);
    };
    return PointCopy;
}());
var p5 = new PointCopy(3, 4);
p5.showUs();
