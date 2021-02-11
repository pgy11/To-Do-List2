import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input, FormHelperText, } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = event => {
    // this will fire off when we click open the button
    event.preventDefault(); // stop refresh when input is submitted
    setTodos([...todos, input]); // add input value to todos
    setInput(""); // clear up the input after clicking add button
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>🔥🔥 To do list 🔥🔥</h1><br/>
      <form>
        <FormControl>
          <InputLabel>해야할 일 📌</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>
      <ul className='app__todo'>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
