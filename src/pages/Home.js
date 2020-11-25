import React, { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Redirect } from 'react-router-dom';

import Todosdetails from '../components/Todosdetails';
import TodosForm from '../components/TodosForm';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
    const { user } = useContext(TodoContext);

    return (
        <div className='container'>
            {user ? (
                <div className='row'>
                    <div className='col-10 mx-auto col-md-8 mt-4'>
                        <h3 className='text-capitalize text-center'>Todoist</h3>
                        <TodosForm />
                        <Todosdetails />
                    </div>
                </div>
            ) : (
                <Redirect to='/signin'></Redirect>
            )}
        </div>
    );
};

export default Home;
