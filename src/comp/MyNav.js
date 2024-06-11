import React from 'react'
import { Button, Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function MyNav() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" variant="dark" data-bs-theme="dark">

                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className="nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/info" className="nav-link">
                                Info
                            </Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/info">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex" onSubmit="/">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        // value={searchTerm}
                        // onChange={handleSearchChange}
                        />
                        <Button variant="success" type="submit">Search</Button>
                    </Form>

                </Container>
            </Navbar>
        </div>
    )
}
