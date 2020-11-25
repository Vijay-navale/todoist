import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from '../context/TodoContext';


const Todosdetails = () => {
    const {todos, dispatch} = useContext(TodoContext);

    return (
       <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'>Your Todos</h3>
            
            {
                todos.length ? (
                    todos.map(({todo, id}) => (
                    <li className='list-group-item text-capitalize d-flex justify-content-between my-2' key={id}>
                        <h6>{todo}</h6>
                        <div className='todo-icon'>
                            <span className='mx-2 text-danger'>
                                <MdDeleteForever 
                                style={{fontSize:'1.5rem'}}
                                onClick={() => dispatch({type: 'REMOVE_TODO', id: id})}
                                />
                            </span>
                        </div>
                    </li>
                    ))
                ): (
                    ''
                )
            }

            <button 
                type='button'
                className='btn btn-danger btn-block text-capitalize'
                onClick={() => dispatch({type: 'CLEAR_TODOS'})}
            >Clear your list</button>
       </ul>
    )
}

export default Todosdetails;
