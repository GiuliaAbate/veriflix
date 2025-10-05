import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/VERIFLIX_logo-removebg-preview.png';
import icon from '../../assets/veri-icon.jpg';
import { Link } from 'react-router-dom';

import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
    return (
        //fixed="top"
        <Navbar expand="xl" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width={300}
                        height={150}
                        className='logo-style'
                        alt="veriflix logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/originals">Originals</Nav.Link>
                        <Nav.Link as={Link} to="/music-videos">Music Videos</Nav.Link>
                        <Nav.Link as={Link} to="/discography">Discography</Nav.Link>
                        <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                        <Nav.Link as={Link} to="/performances">Performances</Nav.Link>
                        <Navbar.Brand as={Link} to="/cast">
                            <img
                                src={icon}
                                width={80}
                                height={80}
                                className='icon d-inline-block align-items-center ms-5 me-3'
                                alt="verivery"
                            />
                            <span className="brand-text">Cast</span>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;