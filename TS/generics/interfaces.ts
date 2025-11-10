// generic interface

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(a: T): T {
  return a;
}

let myId: GenericIdentityFn = identity;

// we may want the generic param to be the param of the entire
// interface

interface GenericIdInt<T> {
  (a: T): T;
}

function ident<T>(a: T): T {
  return a;
}

let iden: GenericIdInt<number> = ident;
console.log(iden(32));
