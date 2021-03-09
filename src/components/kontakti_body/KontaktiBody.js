import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import lokacija from './lokacija.png';


export default function KontaktiBody() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Konataki</h1>
                </Row>
                <Row>
                    <Col>
                        <p>Nalazimo se na adresi "Janka Veselinovica 36" Sabac</p>
                        <p>Na samom uglu dve ulice Janka Veselinovica i Kralja Aleksandra</p>
                        <p>Detaljniju lokaciju mozete videti na mapi ili samo ukucajte koordinate u mapi 44.760465, 19.697845</p>
                    </Col>
                    <Col>
                        <p>GeoMap 015</p>
                        <p>Sediste firme:</p>
                        <p>Janka Veselinovica 36, 15000 Sabac</p>
                        <p>Tel: 060/017-122</p>
                        <p>Mail: geomap015@gmail.com</p>
                    </Col>
                    <Col>
                        <Image src= {lokacija} fluid />
                    </Col>
                </Row>
                <Row>
                    <p>Nasi prozivodi</p>
                </Row>
            </Container>
        </div>
    )
}
