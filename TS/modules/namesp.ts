/// <reference path="./LetterValidator.ts" />

namespace Validation {
  export interface StringValidator {
    isAcc(s: string): boolean;
  }

  const numbersRegex = /^[0-9]+$/;

  export class ZipCodeValidator implements StringValidator {
    isAcc(s: string): boolean {
      return s.length === 6 && numbersRegex.test(s);
    }
  }
}

let strings: string[] = ["Hello", "1243", "sfa1"];

let validators: { [s: string]: Validation.StringValidator } = {}
validators["ZIP"] = new Validation.ZipCodeValidator();
validators["Letters"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
  for (let v in validators) {
    console.log(s + " " + v + ": " + validators[v].isAcc(s));
  }
}
