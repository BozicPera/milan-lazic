import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import i4 from '../index_body/carousel/sliderpics/4.jpg';
import Image from 'react-bootstrap/Image';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';

export default function AeroSnimanje() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Aero Snimanje</h1>
                        <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Image src={i4} fluid />
                        <hr className="hr-white" />
                        <p>U korak sa napretkom tehnologije za vas vršimo aero snimanja sa najmodernijim dronovima visoke rezolucije.</p>
                    </Col>
                    <Col sm={3}>
                        <p>Kontakti:</p>
                        <p>GeoMap 015</p>
                        <hr className="hr-white" />
                        <p>Adresa: Janka Veselinovica 36, 15000 Sabac</p>
                        <hr className="hr-white" />
                        <p>Tel: 060/017-122</p>
                        <hr className="hr-white" />
                        <p>Mail: geomap015@gmail.com</p>
                        <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Testimonial />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UslugeMin />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
