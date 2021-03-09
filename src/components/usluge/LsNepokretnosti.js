import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import i1 from '../index_body/carousel/sliderpics/1.jpg';
import Image from 'react-bootstrap/Image';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';

export default function LsNepokretnosti() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1>Izdavanje posedovnih listova i kopije planova</h1>
                    <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Image src={i1} fluid />
                        <hr className="hr-white" />
                        <p>U sklopu izdavanja listova i kopije planova neophodno je poslati nam na mail licne podatke(ime, ime oca, prezime i kontakt telefon) broj parcele i katastarsku opstinu za koju se trazi list ili plan.</p>
                        
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
