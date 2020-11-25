import React, { useState } from 'react';

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//react-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//toast
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'


//pages
//pages components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/NotFound';

//layout components
import Footer from './layout/Footer';
import Header from './layout/Header';

//Context provider
import TodoContextProvider from './context/TodoContext';

//init firebase
import firebaseConfig from './config/firebaseConfig';
firebase.initializeApp(firebaseConfig);



function App() {
  return (
      <Router>
        <ToastContainer />
        <TodoContextProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/todoist' component={Home}></Route>
            <Route exact path='/signin' component={Signin}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='*' component={PageNotFound}></Route>
          </Switch>
          <Footer />
        </TodoContextProvider>

      </Router>
    );
}

export default App;
