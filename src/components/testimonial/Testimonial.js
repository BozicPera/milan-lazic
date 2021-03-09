import React from 'react';
import './Testimonial.css';
import Avatar from 'react-avatar';

export default function Testimonial() {
    return (

        <div className="testimonials">
        <hr className="hr-white" />
        <h3>Zadovoljni Klijenti</h3>
            <div className="inner">
                <div className="row">
                    <div className="col">
                        <div className="testimonial">
                            <Avatar name="Foo Bar" size="65" round={true} />
                            <div className="name">Full name</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <Avatar name="Foo Bar" size="65" round={true} />
                            <div className="name">Full name</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <Avatar name="Foo Bar" size="65" round={true} />
                            <div className="name">Full name</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
                        </div>
                    </div>

                </div>


            </div>
            <hr className="hr-white" />
        </div>
    )
}
