import type { Todo } from "../types/todo";

type ToDoList = {
  todos: Todo[];
  toggletodo: (id: number) => void;
};

function ToDoList({ todos, toggletodo }: ToDoList) {
  return (
    <div className="w-full p-2 max-h-80 overflow-y-auto">
      {todos.length === 0 && (
        <p className="italic text-center p-1 bg-blue-100 rounded-md">
          No Have To Do.
        </p>
      )}

      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="bg-white flex justify-between items-center px-2  m-1 select-none cursor-pointer hover:bg-blue-100 rounded-md"
            onClick={() => toggletodo(todo.id)}
          >
            <p className="font-bold p-2 rounded-md">
              <span className="mr-0.5">{todo.isComplete ? "✅" : "⭕"}</span>
              {todo.note}
            </p>
            <button className="cursor-pointer">🗑️</button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
