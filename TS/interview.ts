
async function insane(): Promise<void> {
  throw new Error();
}

async function lovely(): Promise<void> {
  try {
    insane();
    console.log("done");
  }
  catch (e) {
    console.log("error");
    console.log(e);
  }
  return;
}

await lovely();

export { };
