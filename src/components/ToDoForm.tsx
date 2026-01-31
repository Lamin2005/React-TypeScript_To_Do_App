import { useState } from "react";
import ToDoList from "./ToDoList";
import type { Todo } from "../types/todo";

function ToDoForm() {
  const [todos, setToDos] = useState<Todo[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const handleSumbit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newToDo.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now(),
      note: newToDo,
      isComplete: false,
    };
    setToDos([...todos, newTodoItem]);
    setNewToDo("");
  };

  const toggletodo = (id: number) => {
    setToDos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
      }),
    );
  };

  console.log(todos);

  return (
    <div className="w-sm bg-amber-50 p-3 rounded-md flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">To Do List App</h1>
      <h2 className="font-semibold">React + Typescript</h2>

      {/* USE onSubmit, NOT onClick */}
      <form
        className="mt-1.5 p-2 flex justify-center items-center"
        onSubmit={handleSumbit}
      >
        <input
          type="text"
          className="border rounded-md px-2 py-1"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-800 text-white px-3 py-1 rounded-md ml-1 cursor-pointer"
        >
          Add
        </button>
      </form>

      <ToDoList todos={todos} toggletodo={toggletodo} />
    </div>
  );
}

export default ToDoForm;
