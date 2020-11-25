import React, { createContext, useReducer, useState, useEffect } from 'react';

import {TodoReducer} from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [todos, dispatch] = useReducer(TodoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
      });
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    return (
        <TodoContext.Provider value={{user, setUser, todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
