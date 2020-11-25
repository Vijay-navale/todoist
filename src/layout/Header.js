import React, { useState, useContext } from 'react';

//reactstrap elemets
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

//links to connect different route
import { Link } from 'react-router-dom';

//context
import { TodoContext } from '../context/TodoContext';

const Header = () => {
    const context = useContext(TodoContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  

    return (
        <Navbar color='dark' light expand='md'>
            <NavbarBrand>
                {context.user ? (
                    <Link to='/' className='text-primary'>
                        StudentGiri
                    </Link>
                ) : (
                    <Link to='/signin' className='text-primary'>
                        StudentGiri
                    </Link>
                )}
            </NavbarBrand>
            <NavbarText className='text-white'>
                {context.user?.email ? context.user.email : ''}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className='ml-auto'>
                <Nav className='ml-auto' navbar>
                    {context.user ? (
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    context.setUser(null);
                                }}
                                className='text-white logout'
                                tag={Link}
                                to='/signin'>
                                Logout
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    to='/signup'
                                    className='text-white mr-3'
                                    >
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    to='/signin'
                                    className='text-white mr-3'
                                    >
                                    Signin
                                </NavLink>
                            </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
