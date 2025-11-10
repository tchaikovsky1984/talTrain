// objects ================================

// define objects the same way

let ob = { x: 3, y: 5, name: "Point1" };

console.log(ob);

// type them as such

function printCoord(pt: { x: number, y: number, name: string }): void {
  console.log(`x: ${pt.x}`);
  console.log(`y: ${pt.y}`);
  console.log(`name: ${pt.name}`);
}

printCoord(ob);

function printCoord3d(pt: { x: number, y: number, z?: number, name: string }): void {
  console.log(`x: ${pt.x}`);
  console.log(`y: ${pt.y}`);
  if (pt.z !== undefined) {
    console.log(`z: ${pt.z}`);
  }
  console.log(`name: ${pt.name}`);
}

let ob3 = { x: 4, y: 3, z: 1, name: "Point2" };

printCoord3d(ob3);
printCoord3d(ob);
