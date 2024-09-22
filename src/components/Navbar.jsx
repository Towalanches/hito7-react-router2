import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
    const { totalPrice } = useContext(CartContext)
    const { token, logout } = useContext(UserContext)

    return (
        <BootstrapNavbar expand="lg">
            <BootstrapNavbar.Brand as={Link} to="/">Pizzería Mamma Mia!</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                    {token ? (
                        <>
                            <Nav.Link as={Link} to="/profile">👦 Mi Perfil</Nav.Link>
                            <button onClick={logout}>Cerrar Sesión</button>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
                        </>
                    )}
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/cart">🛒 Total: ${totalPrice.toLocaleString()}</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}

export default Navbar
