/// <reference path ="./namesp.ts" />

namespace Validation {

  const letterRegex = /^[a-zA-Z]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcc(s: string): boolean {
      return letterRegex.test(s);
    }
  }

}
