class A {
  constructor(l) {
    this.letter = l;
  }

  setLetter(b) {
    console.log(this.letter);
    this.letter = b;
    console.log(b);
  }
}

let a = new A("a");
a.setLetter("b");
