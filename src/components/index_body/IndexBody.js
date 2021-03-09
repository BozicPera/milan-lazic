import React from 'react';
import DemoCarousel from './carousel/DemoCarousel';
import IndexContacts from './indexContact/IndexContacts';
import OurServices from './OurServices/OurServices';
import './IndexBody.css';
import logo from './logo.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


export default function IndexBody() {
    return (
        <div>
            <DemoCarousel />
            <hr className="hr-white" />
            <div className="about-us">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={4}>
                        <Image src= {logo} fluid />
                        </Col>
                        <Col sm={4}>
                            <div className="description">
                                <p>Geodetska kancelarija</p>
                                <h2>GeoMap 015</h2>
                                <p>Resavamo 99% stvari u geodeziji</p>
                                <br />
                                <a href="/onama"><button className="buttons">O nama</button></a>
                                <br />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <hr className="hr-white" />
            <OurServices />
            <hr className="hr-white" />
            <div className="bestQuality">
                <p>Dobro dosli na internet stranicu GeoMap-a. Najveca reklama nam je direktna preporuka zadovoljnih klijenata. </p>
                <br />
                <a href="/galerija"><button className="buttons">Galerija</button></a>
                <br />
            </div>
            <hr className="hr-white" />
            <IndexContacts />
        </div>
    )
}
