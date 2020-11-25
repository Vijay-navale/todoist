import React, { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';

const TodosForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText) {
            dispatch({ type: 'ADD_TODO', todo: { todoString: todoText } });
        } else {
            alert('Please Insert Todo');
        }

        setTodoText('');
    };
    return (
        <div className='card card-body my-3'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        type='text'
                        className='form-control text-capitalize'
                        placeholder='add todo'
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-block btn-warning mt-3 text-capitalize'>
                    Add item
                </button>
            </form>
        </div>
    );
};

export default TodosForm;
