// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import logo from '../assetes/images/logo.svg';

// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import logo from './assetes/images/logo.png'
// import About from './about'
import '../assetes/style/components.css';

// import './assetes/common.css';

function NavbarSec() {
    return (
        <>

            <Navbar key='lg' expand='lg' className="nvbar py-0">
                <Container className='px-0'>
                    <Navbar.Brand href="#" className='text-start logo-container'>
                        {/* <img src={logo} alt="" className='logWid' srcset="" /> */}
                        <div className="logoo"></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-between flex-grow-1 nvLinks">
                                <Nav.Link className='nvlnk' href="/">Home</Nav.Link>
                                <Nav.Link className='nvlnk' href="/about">About</Nav.Link>
                                <NavDropdown
                                    title={<span className='nvlnk'>Services</span>}
                                    id={`offcanvasNavbarDropdown-expand-lg`}

                                >
                                    <NavDropdown.Item className='nvlnkSub' href="#action3">
                                        Computer Education
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nvlnkSub' href="#action4">
                                         Computer/Laptop Service   
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='nvlnkSub' href="#action5">
                                        Home Interior and Construction
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#footer" className='nvlnk'>Contact</Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarSec;