import "../Navigation/index.css"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = () => {
    return(
    <div className="project-page">
      <h1 className="judul">Project Jody</h1>
      <div className="project-description">
        <p>Project ini merupakan web beita yang menggunakan API dari NewsApi. Project ini dibuat dalam jangka waktu 24 jam. Di web tersebut terdapat fitur search yang memungkinkan anda untuk mecari berita yang anda inginkan. Semua berita yang tampil dalam keadaan update disertai dengan tanggal nya.</p>
      </div>
      <div className="project-image">
        <Image src={require('./Picture/web.png')} alt="Project Image" />
      </div>
      <div className="project-details">
        <h2 className="judul">Project Details</h2>
        <ul>
          <li>Client: Jody Kurnia Putra</li>
          <li>Category: Web Berita</li>
          <li>Date: 21/05/2023</li>
        </ul>
      </div>
      <div className="project-features mb-5">
        <h2>Project Features</h2>
        <Row>
            <Col><Image thumbnail src={require('./Picture/api.png')} alt="Project Image" /></Col>
            <Col><Image thumbnail src={require('./Picture/react.png')} alt="Project Image" /></Col>
            <Col><Image thumbnail src={require('./Picture/css-3.png')} alt="Project Image" /></Col>
        </Row>
      </div>
      <div className="project-cta">
        <button><a href="https://web-berita.vercel.app/" className="link">View Project</a></button> 
      </div>
    </div>
    )
}
       


export default Project;