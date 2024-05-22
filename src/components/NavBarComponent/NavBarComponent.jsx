
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Bienvenidos a la Tienda Magica</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Conocenos</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <NavDropdown title="Items" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">pociones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Armas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">armaduras</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              completar compras
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <ButtonComponent/>
    </Container>
  </Navbar>

    
  )
}
