import { useEffect, useState } from "react";

function ToDos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: any) => { setTodos(data.slice(0, 5)); });
  }, [])

  if (!todos)
    return <h1>Could not return TODOs</h1>;

  return (
    <div className="flex flex-col justify-evenly items-center">
      {(todos as any[]).map((todo: any) => (
        <div id={todo.id} className="border-2 rounded-[20px] bg-amber-200 w-[500px] h-[400px] font-[Helvetica] flex flex-col justify-evenly items-center">
          <h1 id={todo.id + "1"} className="text-2xl font-extrabold ">{todo.id}:{todo.title}</h1>
          <h2 id={todo.id + "2"} className="text-lg">{todo.userId}</h2>
          <h2 id={todo.id + "3"} className="text-lg">{todo.completed ? "DONE" : "NOT DONE"}</h2>
        </div>
      ))}
    </div>
  );
}

export default ToDos;
