import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import loguito from '../../assets/mail-open-heart.svg';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand={expanded} className="bg-body-dark mb-3">
        <Container fluid>
          <div className='d-flex justify-content-center align-items-center'>
            <Navbar.Brand className='text-light'>A + T </Navbar.Brand>
            <img src={loguito} className='loguito' />
          </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className='botoncito-nav'
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
            show={expanded}
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Momentos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className='linkNav' onClick={closeNavbar}>
                  Inicio
                </Link>
                <Link to="novia-pedido" className='linkNav' onClick={closeNavbar}>
                  Queres ser mi Novia?
                </Link>
                <Link to="sanValentin24" className='linkNav' onClick={closeNavbar}>
                  San Valentin 2024
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;
