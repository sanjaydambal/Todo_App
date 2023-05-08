import React,{useState} from 'react'
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleTodoDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  

export default Todo