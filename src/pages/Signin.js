import React, { useState, useContext } from 'react';

import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
} from 'reactstrap';

//firebase
import firebase from 'firebase/app';

//react-router
import { Redirect } from 'react-router-dom';

//toastify
import { toast } from 'react-toastify';

//context
import {TodoContext} from '../context/TodoContext'

const Signin = () => {
    const context = useContext(TodoContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                context.setUser({ email: res.user.email, uid: res.user.uid });
            })
            .catch((error) => {
                console.log(error);
                toast(error.message, {
                    type: 'error',
                });
            });
    };
    const handleSubmit = e => {
        e.preventDefault();
        handleSignin();
    }

    if(context.user?.uid){
        return <Redirect to='/'></Redirect>
    }
    return (
        <Container className='text-center'>
          <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
              <Card>
                <Form onSubmit={handleSubmit}>
                  <CardHeader className=''>Signin here</CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Label for='email' sm={3}>
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='provide your email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for='password' sm={3}>
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='your password here'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <p>(You can sign in with following credentials for testing the app)</p>
                    <p style={{margin:'0', color:'blue', padding:'0'}}><span style={{color:'#000'}}>Email:</span> studentgiri@gmail.com</p>
                    <p style={{margin:'0', color:'blue', padding:'0'}}><span style={{color:'#000'}}>Password:</span> 123456</p>
                  </CardBody>
                  <CardFooter>
                    <Button type='submit' block color='primary'>
                      Sign In
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      );
      
}

export default Signin;