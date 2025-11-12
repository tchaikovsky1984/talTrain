interface A {
  (a: string): number;
  x: number;
}

class AI implements A {
  x: number;

  method(a: string): number {
    return a.length;

  }
}
