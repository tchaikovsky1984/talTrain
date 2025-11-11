// omit <t, k>

// omits k keys from type t to create a new type

interface Todo {
  title: string,
  desc: string,
  com: boolean,
}

type TodoPreview = Omit<Todo, "desc" | "com">;

const todo: TodoPreview = {
  title: "hi",
};

console.log(todo);
