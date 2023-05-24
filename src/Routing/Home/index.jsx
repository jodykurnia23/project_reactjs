import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Navigation/index.css";
import Img from 'react-bootstrap/Image'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <Card className="text-center">
        <Card.Header className="fs-3 judul">Selamat Datang Di Website Jody Kurnia Putra</Card.Header>
            <Card.Body>
                <Card.Title className="judul fs-5">Junior Web Developer</Card.Title>
                <Card.Text>
                Saya adalah seorang pelajar di perusahaan yang populer didunia IT yaitu Eduwork. Saya merasa nyaman dan bangga belajar di Eduwork. Mentornya baik dan dapat menjelaskan materi yang saya tidak ketahui. Terimakasih Eduwork.
                </Card.Text>
                <Img src='https://images.glints.com/unsafe/720x0/glints-dashboard.s3.amazonaws.com/company-logo/4ce69e75c1877262e96a94524eade57d.jpg' className='image1' alt='eduwork' />
                <Button variant="primary" onClick={handleShow}>Profile Lengkap</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hallo semuanya!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <p>Perkenalkan saya Jody Kurnia Putra</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        <Card.Footer className="text-muted" />
        <Container className="content p-5" id="profile">
                    <div className="main text-center">
                        <h3 className="judul">My Profile</h3>
                    </div>
            <Row className="mt-5 text-center">
                <Col sm={12} md={4}>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Keahlian Saya</h2>
                    <p className="fs-5 fst-italic">Saya Mempunyai beberapa keahlian seperti bisa mengoperasikan microsoft word atau excel, Mengerti HTML, CSS, dan dasar Javascript.</p>
                </Col>
                <Col sm={12} md={4}>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Pengalaman Saya</h2>
                    <p className="fs-5 fst-italic">Saya pernah bekerja di perusahaan Rekso Nasional Food, sebagai crew PKWT. Berawal dari tahun 2018 sampai 2021. Alasan saya keluar dari perusahaan karna abis kontrak.</p>
                </Col>
                <Col sm={12} md={4}>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Kelemahan Saya</h2>
                    <p className="fs-5 fst-italic">Saya tidak menguasai bahasa asing, saya tidak bisa bekerja di keramaian, dan saya kurang percaya diri atas hasil yang saya peroleh.</p>
                </Col>
            </Row>
            </Container>
    </Card>
    )
}

export default Home;