function makeIter(arr) {
  var iter = {
    idx: -1,
    sq: arr,
    next: function() {
      if (this.idx + 1 >= this.sq.length) {
        return { value: undefined, done: true };
      }
      return { value: this.sq[++this.idx], done: false };
    }
  };
  return iter;
}
var arr = [1, 2, 3, 4];
var iter = makeIter(arr);
/*
for (var i = 0; i < 6; i++) {
    console.log(arr[i]);
    console.log(iter.next());
}
*/
iter = makeIter(arr);
var preIter = arr[Symbol.iterator]();
for (var i = 0; i < 6; i++) {
  console.log(iter.next());
  console.log(preIter.next());
}
