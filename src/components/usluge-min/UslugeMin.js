import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './UslugeMin.css';
import Image from 'react-bootstrap/Image';
import logo from '../index_body/logo.png';

export default function UslugeMin() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>Izdvajamo iz ponude</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <ul className="uslugeMinStyle">
                            <li><a href="/omedjavanje">Obnova granicnih linija parcela- omedjavanje</a></li>
                            <li><a href="/deobaparcela">Deoba parcela</a></li>
                            <li><a href="/ucrtavanjeobjekata">Ucrtavanje objekata</a></li>
                            <li><a href="/ozakonjenjeobjekata">Ozakonjenje objekata</a></li>
                            <li><a href="/geodetskepodloge">Izrada geodetskih podloga</a></li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul className="uslugeMinStyle">
                            <li><a href="/podzemeninstalacije">Snimanje podzeminh instalacija</a></li>
                            <li><a href="/aerosnimanje">Aero snimanje</a></li>
                            <li><a href="/saobracajnice">Snimanje saobracajnica</a></li>
                            <li><a href="/listovinepokretnosti">Izdavanje posedovnih listova i kopija planova</a></li>
                            <li><a href="/inzenjerskageodezija">Inzenjerska geodezija</a></li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <Row>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        </Row>
                        <Row>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        <Col><a href="/galerija"><Image src= {logo} thumbnail /></a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
