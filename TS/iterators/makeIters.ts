
function makeIter(arr: any[]) {
  const iter = {
    idx: -1,
    sq: arr,
    next() {
      if (this.idx + 1 >= this.sq.length) {
        return { value: undefined, done: true };
      }
      return { value: this.sq[++this.idx], done: false };
    }
  }
  return iter;
}

const arr = [1, 2, 3, 4];
let iter = makeIter(arr);

for (let i = 0; i < 6; i++) {
  console.log(arr[i]);
  console.log(iter.next());
}

iter = makeIter(arr);
const preIter = arr[Symbol.iterator]();

for (let i = 0; i < 6; i++) {
  console.log(iter.next());
  console.log(preIter.next());
}
