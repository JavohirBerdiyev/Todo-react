import React from 'react';

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteHanler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}> {text} </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHanler} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}

export default Todo;
