import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/VERIFLIX_logo-removebg-preview.png';
import icon from '../../assets/veri-icon.jpg';
import { Link } from 'react-router-dom';

import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
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

                {/* Hamburger menu */}
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav standard per desktop */}
                <Navbar.Collapse id="responsive-navbar-nav" className="desktop-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/originals">Originals</Nav.Link>
                        <Nav.Link as={Link} to="/music-videos">Music Videos</Nav.Link>
                        <Nav.Link as={Link} to="/discography">Discography</Nav.Link>
                        <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                        <Nav.Link as={Link} to="/performances">Performances</Nav.Link>
                        <Navbar.Brand as={Link} to="/cast">
                            <img src={icon} width={80} height={80} className='icon ms-5 me-3' alt="verivery"/>
                            <span className="brand-text">Cast</span>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>

                {/* Sidebar solo per mobile */}
                <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/originals" onClick={toggleSidebar}>Originals</Nav.Link>
                        <Nav.Link as={Link} to="/music-videos" onClick={toggleSidebar}>Music Videos</Nav.Link>
                        <Nav.Link as={Link} to="/discography" onClick={toggleSidebar}>Discography</Nav.Link>
                        <Nav.Link as={Link} to="/entertainment" onClick={toggleSidebar}>Entertainment</Nav.Link>
                        <Nav.Link as={Link} to="/performances" onClick={toggleSidebar}>Performances</Nav.Link>
                        <Nav.Link as={Link} to="/cast" onClick={toggleSidebar}>
                            <img src={icon} width={80} height={80} className='icon me-2' alt="verivery"/>
                            Cast
                        </Nav.Link>
                    </Nav>
                </div>

                {showSidebar && <div className="overlay" onClick={toggleSidebar}></div>}
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
