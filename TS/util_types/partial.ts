// partial

// allows you to make all props of a type optional

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

console.log(todo1);

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(todo2);
