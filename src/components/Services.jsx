import React from 'react';
import './Services.css';
import headlineBrush from '../assets/headline-brush.svg';
import serviceFilm from '../assets/service-film.png';
import serviceBranding from '../assets/service-branding.png';
import serviceArt from '../assets/service-art.png';
import mandalaBorder from '../assets/mandala-border.svg';
import tapeFilm from '../assets/tape-film.png';
import tapeBranding from '../assets/tape-branding.png';
import tapeArt from '../assets/tape-art.png';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-headline-container">
        <h2 className="services-headline">
          The storyboard reveals the breadth of our craft.
        </h2>
        <img src={headlineBrush} alt="brush stroke" className="headline-brush" />
      </div>

      <div className="services-grid">
        <div className="service-card card-1">
          <img src={tapeFilm} alt="tape" className="service-card-tape tape-1" />
          <div className="service-card-image">
            <img src={serviceFilm} alt="Film Production" />
          </div>
          <p>Film Production</p>
        </div>

        <div className="service-card card-2">
          <img src={tapeBranding} alt="tape" className="service-card-tape tape-2" />
          <div className="service-card-image">
            <img src={serviceBranding} alt="Branding" />
          </div>
          <p>Branding</p>
        </div>

        <div className="service-card card-3">
          <img src={tapeArt} alt="tape" className="service-card-tape tape-3" />
          <div className="service-card-image">
            <img src={serviceArt} alt="Art Curation" />
          </div>
          <p>Art Curation</p>
        </div>
      </div>

      <img src={mandalaBorder} alt="mandala border" className="services-bottom-border" />
    </section>
  );
};

export default Services;
