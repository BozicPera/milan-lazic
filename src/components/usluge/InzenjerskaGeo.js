import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import i3 from '../index_body/carousel/sliderpics/3.jpg';
import Image from 'react-bootstrap/Image';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';

export default function InzenjerskaGeo() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1>Inzenjerska Geodezija</h1>
                    <hr className="hr-white" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Image src={i3} fluid />
                        <hr className="hr-white" />
                        <p>Inženjerska geodezija je posebna oblast u geodeziji, gde se na najrazličitijim i najkompleksnijim inženjerskim objektima primenjuju različita znanja, veštine,metode i oprema iz oblasti geodezije. Podrazumeva izradu geodetskih mreža, specifična snimanja i izradu geodetskih podloga za potrebe izrade projekata kompleksnih inženjerskih objekata. Takođe podrazumeva i primenu geodezije u ispitivanju konstrukcija, geodetskom osmatranju objekata i tla, u toku i poslegrađenja objekata, kao i geodetski nadzor izvođenja radova.</p>
                        
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
