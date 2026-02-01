import { useState } from "react";
import type { Todo } from "../types/todo";

type ToDoList = {
  todos: Todo[];
  toggletodo: (id: number) => void;
  deletetodo: (id: number) => void;
  updatetodo: (id: number, newText: string) => void;
};

function ToDoList({ todos, toggletodo, deletetodo, updatetodo }: ToDoList) {
  const [edit, setEdit] = useState<number>(0);
  const [editText, setEditText] = useState<string>("");

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
          >
            {edit === todo.id ? (
              <>
                <input
                  type="text"
                  className="border py-1 px-2 rounded-md"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <div className="flex justify-around items-center gap-3 ml-1">
                  <button
                    className="cursor-pointer bg-green-500 text-black px-2 py-1 rounded-md"
                    onClick={() => {
                      updatetodo(todo.id, editText);
                      setEdit(0);
                      setEditText("");
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="cursor-pointer bg-red-500 text-black px-2 py-1 rounded-md"
                    onClick={() => setEdit(0)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p
                  className="font-bold p-2 rounded-md"
                  onClick={() => toggletodo(todo.id)}
                >
                  <span className="mr-0.5">
                    {todo.isComplete ? "✅" : "⭕"}
                  </span>
                  {todo.note}
                </p>

                <div className="flex justify-between items-center gap-5">
                  <button
                    className="cursor-pointer"
                    onClick={() => deletetodo(todo.id)}
                  >
                    🗑️
                  </button>
                  <button
                    className="cursor-pointer border-2 p-1 rounded-md"
                    onClick={() => {
                      setEdit(todo.id);
                      setEditText(todo.note);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
