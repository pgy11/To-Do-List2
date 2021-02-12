import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from './StateProvider';

function Todo(props) {
    const [{todos}, dispatch] = useStateValue();

    const deleteTodo = () =>{
        dispatch({
            type: 'REMOVE_FROM_TODOS', 
            id: props.id
        });        
    }

    return (
            <div className='todo__listItem'>
                <span>{props.text}</span>
                <DeleteIcon className='todo__deleteIcon' onClick={deleteTodo}/>
            </div>
    );
}

export default Todo;
