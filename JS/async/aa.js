// async await

// async functions always return promises
function f1(str) {
  console.log("resolved with: " + str.join(", "));
}
function f2(str) {
  console.log("rejectd with: " + str.join(", "));
}

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let r = Math.round(Math.random());
      if (r) {
        resolve(["done", "did"]);
      }
      reject(["not done", "didnt"]);
    }, 1000)
  });

  return promise;
}

f()
  .then(f1, f2)
  .finally(() => { console.log("ended"); });

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let r = Math.round(Math.random());
      if (r) {
        resolve(["done", "did"]);
      }
      reject(["not done", "didnt"]);
    }, 1000)
  });
  try {
    let str = await promise;
    console.log("resolved with: " + str.join(", "));
  }
  catch (str) {
    console.log("rejectd with: " + str.join(", "));
  }
  finally {
    console.log("ended");
  }
}

g();
