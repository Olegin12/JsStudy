import React from 'react';
import {Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteSweep} from "@material-ui/icons";

const TodoList = ({todos, deleteTodo}) => (
    <List>
        {todos.map((todo, index) => (<ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple/>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}>
                        <DeleteSweep />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
                ))}
    </List>
);

export default TodoList;