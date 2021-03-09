import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import i5 from '../index_body/carousel/sliderpics/5.jpg';
import Image from 'react-bootstrap/Image';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';

export default function SnSaobracajnica() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Snimanje Saobracajnica</h1>
                        <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Image src={i5} fluid />
                        <hr className="hr-white" />
                        <p>Snimanjem, tj prikupljanja podataka, podrazumeva se pre svega, određivanje
                        koordinata karakterističnih tačaka, prirodnih i vještačkih objekata i reljefa, na prostoru
                        koji želi da se predstavi na topografskoj podlozi, kao i karakteristika objekta koji se
                        šifriraju topografskim znacima. Za vaše potrebe vršimo sva neophodna snimanja saobraćajnica, svih detalja i izrađujemo
podloge u DWG-u ili fajlu po vašoj želji.</p>
                        
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
