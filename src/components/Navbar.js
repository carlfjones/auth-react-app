import React from 'react' 
import { Navbar, Button } from 'react-bootstrap'
import Logo from '../imgs/logo_white.png'

export default function TopNavbar() {
    return (
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={Logo}
                width="25"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            
            </Navbar.Brand>
            <Button variant="outline-secondary" className='nav-btn'>Log In</Button>
        </Navbar>
    )
}