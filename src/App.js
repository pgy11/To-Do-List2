import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input, FormHelperText, } from "@material-ui/core";
import Todo from "./Todo";
import {useStateValue} from './StateProvider'

let id = 1;

function App() {
  const [{todos}, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const addTodo = event => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TO_TODOS',
      item: {
        id: id++,
        text: input
      }
    });
    setInput('');
  };

  return (
    <div className="App">
      <h1>🔥🔥 To do list 🔥🔥</h1><br />
      <form>
        <FormControl>
          <InputLabel>해야할 일 📌</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>

      <div className='app__todo'>
        {todos.map(item =>(
           <Todo id={item.id} text={item.text}/>
        ))}
      </div>
    </div>
  );
}

export default App;
