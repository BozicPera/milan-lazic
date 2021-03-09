import React from 'react';
import './OurServices.css';

export default function OurServices() {
  return (
    <div className="services-section">
      <div className="inner-width">
        <h1 className="section-title">Nase Usluge</h1>
        <div className="border"></div>
        <div className="services-container">

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="service-title">Deoba Parcela</div>
            <div className="service-desc">
              U koliko ste se odlucili za deobu(podelu) parcele, mi Vam mozemo pomoci.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="service-title">Ozakonjenje Objekata</div>
            <div className="service-desc">
              Objekti Vam nisu legalizovani? Nikakav problem, zavrsite sve kod nas.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-file-contract"></i>
            </div>
            <div className="service-title">Izrada Geodetskih Podloga</div>
            <div className="service-desc">
              Kod nas mozete zavrsiti sve procese izrade geodetskih podloga.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-object-ungroup"></i>
            </div>
            <div className="service-title">Omedjavanje</div>
            <div className="service-desc">
              Na efikasan nacin povraticemo tacke na Vase  ele na obostrano zadovoljstvo.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-paper-plane"></i>
            </div>
            <div className="service-title">Aero Snimanje</div>
            <div className="service-desc">
              U korak sa napretkom tehnologije za Vas vrsimo aero snimanja sa najmodernijim dronovima visoke rezolucije.
            </div>
          </div>

          <div className="service-box">
            <div className="service-icon">
              <i className="fas fa-car"></i>
            </div>
            <div className="service-title">Snimanje Saobracajnica</div>
            <div className="service-desc">
              Za Vase potrebe vrsimo sva neophodna snimanja saobracajnica, svih ja i izradjujemo podloge u DWG ili fajlu Vasoj zelji.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
