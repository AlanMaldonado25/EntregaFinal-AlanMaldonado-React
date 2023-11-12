import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/Images/logo1-removebg.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="NavBar w-100">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="" className='LogoNavbar'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='Navbar-Links'>
                        <Nav className="me-auto navList">
                            <Nav.Link className='NavLink' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/categoria/procesador">Procesadores</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/categoria/almacenamiento">Almacenamiento</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/categoria/RAM">Ram</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/categoria/mothers">Mothers</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/categoria/gabinete">Gabinetes</Nav.Link>
                            <Nav.Link className='NavLink' as={Link} to="/cart"><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
