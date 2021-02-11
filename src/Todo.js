import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";

function Todo(props) {
    return (
            <div className='todo__listItem'>
                <span>{props.text}</span>
                <DeleteIcon className='todo__deleteIcon' />
            </div>
    );
}

export default Todo;
