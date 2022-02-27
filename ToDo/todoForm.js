import React, {useState} from 'react';
import {TextField} from "@material-ui/core";
import useInputState from "./useInputState";

const TodoForm = ({saveTodo}) => {
    const [value, setValue] = useInputState('');

    return (
       <form
       onSubmit={e => {
           e.preventDefault();
           saveTodo(value);
           reset();
       }}>
           <TextField
               variant='outlined'
               placeholder='Add todo'
               margin='normal'
               onChange={onChange}
               value={value}
           />
       </form>
    );
};

export default TodoForm;