// parameters <function type>

// constructs a tuple type from the types used in the params of a function

type T0 = Parameters<() => string>;
//type T0 = []

type T1 = Parameters<(s: string) => void>;
//type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
//type T2 = [arg: unknown]
