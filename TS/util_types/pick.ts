// pick<t, k>

// constructs a new type by taking a type t and preserving only 
// k keys from it
// k must be a type itself (usually a type union)

interface Todo {
  title: string,
  desc: string,
  com: boolean,
}

type TodoPreview = Pick<Todo, "title" | "com">;

const todo: TodoPreview = {
  title: "clean room",
  com: false,
};

console.log(todo);
