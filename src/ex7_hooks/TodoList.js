import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //simulate a data fetch from API
    // next week we will do it using axios js library

    /*fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json()).then(data => {
        // update the state
        setTodos(data);
    });*/

    const apiResponseData = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: true,
      },
    ];

    setTodos(apiResponseData);
  }, []);

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            const trElement = (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    X
                  </button>
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            );

            return trElement;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
