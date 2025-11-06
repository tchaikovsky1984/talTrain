
function showMes(): void {
  console.log("hello");
}

showMes();

function message(from: string, text: string = "no text provided"): void {
  console.log(from + ": " + text);
}

message("anshul");

//closures

const pet = function(s: string): () => string {
  const getName = function(): string {
    return s;
  }
  return getName;
}

const viv = pet("Vivie");
console.log(viv());

