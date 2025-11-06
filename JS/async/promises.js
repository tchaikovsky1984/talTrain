// promises

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let r = Math.round(Math.random());
    console.log(r);
    if (r) {
      resolve(["done", "did"]);
    }
    reject(["not done", "could not"]);
  }, 1000)
});

function f1(str) {
  console.log(str);
  console.log("got resolved with: " + str.join(","));
}

function f2(str) {
  console.log("got rejected with: " + str.join(","));
}

promise
  .then(f1)
  .catch(f2)
  .finally(() => { console.log("ended") });

