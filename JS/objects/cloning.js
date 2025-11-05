// cloning ======================================

// can be achieved through assigning all properties of an object
// to an empty object

let user = { name: "john" };

let clone = {}

Object.assign(clone, user);

console.log(user);
console.log(clone);

// or through for each prop copying

let clone2 = {};
for (let key in user) {
  clone[key] = user[key];
}

console.log(clone2);

// we can also use assing for its intended use

let perm1 = { canView: true };
Object.assign(user, perm1);
console.log(user);

// it will overwrite stuff too

Object.assign(user, { name: "Pete" })
console.log(user);

// nested cloning is harder cant simply be done by assign as it
// will just copy the reference to the subobject

Object.assign(user, { sizes: { height: 182, weight: 70 } });
console.log(user);

let clone3 = {};
Object.assign(clone3, user);
console.log(clone3);

user.sizes.weight = 50;
console.log(user);

console.log(clone3);

console.log(user.sizes == clone3.sizes);

// structured clone fixes this, although it fails with function
// props

let clone4 = structuredClone(user);
console.log(clone4);
console.log(user);

clone4.sizes.weight = 75;

console.log(clone4);
console.log(user);
