// record <key, type>

// constructs a object type which property keys that are key and
// whose property values are of type type.

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: "Persian"
  },
  boris: {
    age: 5,
    breed: "Maine Coon"
  },
  mordred: {
    age: 2,
    breed: "Bengal"
  }
}

console.log(cats);
