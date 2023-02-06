import { useContext, useEffect, useRef } from "react";
import { TodoList } from "../../components/TodoList/TodoList";
import { AuthContext } from "../../context/AuthContext";
import { TodoContext } from "../../context/TodoContext";

export const PrivateHome = () => {
  const todoTitle = useRef();

  const { token } = useContext(AuthContext);
  const { todos, setTodos } = useContext(TodoContext);

  const getTodos = () => {
    fetch("http://localhost:5000/todo", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  const handleTodo = (evt) => {
    evt.preventDefault();

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        text: todoTitle.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    todoTitle.current.value = "";
  };

  return (
    <div>
      <div className="w-50 mx-auto py-5 shadow mt-5">
        <h2 className="mb-4 text-center">Todo...</h2>
        <form onSubmit={handleTodo} className="w-75 mx-auto">
          <div className="input-group">
            <input
              ref={todoTitle}
              className="form-control"
              type="text"
              placeholder="Todo..."
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
      <TodoList />
    </div>
  );
};
