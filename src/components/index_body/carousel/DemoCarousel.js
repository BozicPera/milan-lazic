import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import i1 from './sliderpics/1.jpg';
import i2 from './sliderpics/2.jpg';
import i3 from './sliderpics/3.jpg';
import i4 from './sliderpics/4.jpg';
import i5 from './sliderpics/5.jpg';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={true} showThumbs={false} autoPlay={true} showStatus={false} showIndicators={true} infiniteLoop={true}>
            <div>
                <img src={i1} alt="i1" />
                <p className="legend">Omedjavanje i obnova katastarske parcele</p>
            </div>
            <div>
                <img src={i2} alt="i2" />
                <p className="legend">Legalizacija Objekata-Ozakonjenje</p>
            </div>
            <div>
                <img src={i3} alt="i3" />
                <p className="legend">Izvodimo geodetske radove za potrebe najvise tacnosti</p>
            </div>
            <div>
                <img src={i4} alt="i4" />
                <p className="legend">U korak sa napretkom - Aero snimanje za potrebe 3D modela i mapiranja</p>
            </div>
            <div>
                <img src={i5} alt="i5" />
                <p className="legend">Vrsimo geodetske usluge pri inzenjerskoj geodeziji(izgradnja puteva i mostova)</p>
            </div>
        </Carousel>
        )
    }
}
