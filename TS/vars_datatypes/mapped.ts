// mapped types build on the index signature typing

// mapped types

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

let a: FeatureOptions = {
  darkMode: true,
  newUserProfile: true,
};

console.log(a);

// mapping modifiers
// +/- property properties to change the properies' properties

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

/*&type UnlockedAccount = {
    id: string;
    name: string;
}*/

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
/*
 * type User = {
    id: string;
    name: string;
    age: number;
    }
 */

