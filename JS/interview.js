
async function insane() {
  throw new Error();
}

async function lovely() {
  try {
    await insane();
    console.log("done");
  }
  catch (e) {
    console.log("error");
    console.log(e);
  }
}

await lovely();
