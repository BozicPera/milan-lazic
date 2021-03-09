import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from '../index_body/logo.png';
import onama from './onama.jpg';
import Image from 'react-bootstrap/Image';
import './OnamaBody.css';
import Testimonial from '../testimonial/Testimonial';
import UslugeMin from '../usluge-min/UslugeMin';


export default function OnamaBody() {
  return (
    <div>
      <Container>
        <Row>
          <h1>O nama</h1>
          <hr />
        </Row>
        <Row>
          <Col sm={4}>
            <Row>
            <Image src= {logo} fluid />
            </Row>
            <Row> 
              <br />
              <p>Geodetska kancelarija GeoMap 015 osnovana je 2020. godine, resavamo 99% stvari u geodeziji, 
                bavimo se obnovom granicnih linija parcela(omedjavanjem), 
                deobom parcela,
                ucrtavanjem objekata,
                ozakonjenjem objekata,
                izradjujemo geodetske podloge,
                snimamo podzemne instalacije, saobracajnice,
                vrsimo aero snimanje,
                radimo izdavanje posedovnih listova i kopija planovam,
                a bavimo se i inzenjerskom geodezijom
                </p>
                <br />
            </Row>
          </Col>
          <Col sm={8}>
          <Image src= {onama} fluid />
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
