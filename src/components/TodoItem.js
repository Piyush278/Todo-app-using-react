import React from "react";

function TodoItem({ text, todo, todos, setTodos }) {
  //Event Handlers
  const deleteHandler = () => {
    console.log(todo.id);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button type="checkbox" onClick={completeHandler} className="complete-btn">
         <i className="fas fa-check"></i>
      </button> 

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
