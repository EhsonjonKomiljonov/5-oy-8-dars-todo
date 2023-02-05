import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TodoContext } from "../../context/TodoContext";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const { token } = useContext(AuthContext);

  const handleEdit = (todoId, todoText) => {
    
    const findedTodo = todos.find((todo) => {
      if (todo.id === todoId) {
        const newTodo = prompt("Yangi Todo kiriting", todoText);

        fetch(`http://localhost:5000/todo/${todo.id}`, {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: newTodo,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }
    });

    setTodos(todos);
  };

  const handleDelete = (todoId) => {
    const filteredTodo = todos.filter((todo) => {
      if (todo.id === todoId) {
        fetch(`http://192.168.100.153:5000/todo/${todo.id}`, {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }
    });

    setTodos(filteredTodo);
  };

  return (
    <ul className="my-3 list-group w-50 mx-auto">
      {todos.length ? (
        todos.map((todo) => (
          <li
            key={todo.id}
            className="d-flex align-items-center justifi-content-between list-group-item"
          >
            <p className="flex-grow-1 m-0">{todo.todo_value}</p>
            <button
              onClick={() => handleEdit(todo.id, todo.todo_value)}
              className="btn btn-warning me-3"
            >
              EDIT
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-danger"
            >
              DELETE
            </button>
          </li>
        ))
      ) : (
        <h2 className="text-center text-warning">Todolar yo'q!</h2>
      )}
    </ul>
  );
};
