import "../Navigation/index.css"
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return(
        <Container fluid className="mt-3 mb-0 bg-dark">
            <footer>
                <p className="text-light text-center footer">
                    &copy; 2021 Jody, Inc. All rights reserved.
                </p>
            </footer>
        </Container>
    )
}

export default Footer;