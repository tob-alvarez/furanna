import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import loguito from '../../assets/mail-open-heart.svg'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-dark mb-3">
          <Container fluid>
            <div className='d-flex justify-content-center align-items-center'>
                <Navbar.Brand className='text-light'>Anna + Tobias </Navbar.Brand>
                <img src={loguito} className='loguito' />
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='botoncito-nav'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Momentos
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className='linkNav'>Inicio</Link>
                  <Link to="novia-pedido" className='linkNav'>Queres ser mi Novia?</Link>
                  <Link to="sanValentin24" className='linkNav'>San Valentin 2024</Link>
                </Nav>  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {children}
    </>
  );
}

export default Layout;