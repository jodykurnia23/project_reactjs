import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark" className='sidebar'>
            <Container>
                <Navbar.Brand>Jody Kurnia Putra</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="project">Project</Link>
                    <Link to="contact">Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;