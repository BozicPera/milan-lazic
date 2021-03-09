import React from 'react';
import './IndexContacts.css';

export default function IndexContacts() {

  return (
    <div>
      <div className="txt-contacts">
        <p>Potrebna Vam je brza pomoc ili imate pitanje</p>
        <h2>Kontaktirajte nas</h2>
      </div>
      <div className="contact-info">
        <div className="card">
          <i className="card-icon far fa-envelope"></i>
          <p>geomap015@gmail.com</p>
        </div>

        <div className="card">
          <i className="card-icon fas fa-phone"></i>
          <p>+38166017122</p>
        </div>

        <div className="card">
          <i className="card-icon fas fa-map-marker-alt"></i>
          <p>Kralja Aleksandra 23, Sabac</p>
        </div>
      </div>
    </div>
  )
}
