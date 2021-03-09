import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import i2 from '../index_body/carousel/sliderpics/2.jpg';
import Image from 'react-bootstrap/Image';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';

export default function Ozakonjenje() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1>Legalizacija objekata - Ozakonjenje</h1>
                    <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Image src={i2} fluid />
                        <hr className="hr-white" />
                        <p>Objekti vam nisu legalizovani? Nikakav problem. Našim angažovanjem vam omogućavamo proces ozakonjenja bilo da se radi o stambenim, pomoćnim ili objektima bilo koje namene na brz i efikasan način. Završite sve na jednom mestu.</p>
                        
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
