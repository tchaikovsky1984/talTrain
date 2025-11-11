// readonly<type>

// Sets all props to readonly

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

console.log(todo);

// todo.title = "hello"; //error


