import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">GeoMap 015</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                    <Nav>
                    <Nav.Link href="/">Pocetna</Nav.Link>
                        <Nav.Link href="/onama">O Nama</Nav.Link>
                        <NavDropdown title="Usluge" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/omedjavanje">Omedjavanje</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/deobaparcela">Deoba Parcela</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ucrtavanjeobjekata">Ucrtavanje Objekata</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ozakonjenjeobjekata">Ozakonjenje Objekata</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/geodetskepodloge">Izrada Geodetskih Podloga</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/podzemeninstalacije">Snimanje Podzemnih Instalacija</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/aerosnimanje">Aero Snimanje</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/saobracajnice">Snimanje Saobracajnica</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/listovinepokretnosti">Listovi Nepokretnosti I Kopije Planova</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/inzenjerskageodezija">Inzenjerska Geodezija</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/galerija">Galerija</Nav.Link>
                        <Nav.Link href="/kontakti">Kontakti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header