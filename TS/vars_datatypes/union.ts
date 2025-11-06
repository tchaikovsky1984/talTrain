// type unions

function printId(id: number | string) {
  console.log(`User ID: ${id}`);
}

printId(43);
printId("abcd");

function printALot(
  s:
    | number
    | string
    | boolean
) {
  console.log(s);
}

printALot("abc");
printALot(2);
printALot(true);

function welcomePatron(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  }
  else {
    console.log("Hello, " + x);
  }
}

welcomePatron("Anshul");
welcomePatron(["Keona", "Kapil"]);


