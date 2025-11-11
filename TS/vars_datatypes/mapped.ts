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

