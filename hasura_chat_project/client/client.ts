import readline from "readline/promises";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  try {
    while (true) {
      const cmd: string = await r1.question("you$", {
        signal: AbortSignal.timeout(10000)
      });
      if (cmd === "/end") {
        break;
      }
      const cmd_arr: string[] = cmd.split(" ");


    }

  }
  catch (err) {
    console.log("Something went wrong");
  }
}
