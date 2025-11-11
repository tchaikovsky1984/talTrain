// required type

// converts all props into required props even the optional props

interface Props {
  a?: number;
  b?: number;
}

const a: Props = { a: 5 };

// const a: Required<Props> = {a: 5}; // error

const ab: Required<Props> = { a: 5, b: 3 };
