import React from 'react';
import { FaHome, FaEnvelopeOpen, FaPhoneSquareAlt } from 'react-icons/fa';
import '../styles/components/about.scss';
import profile from '../img/jey026.png';

const About = () => {
  return (
    <div className="about container">
      <div className="content">
        <div className="about-content">
          <div className="about-profile">
            <img src={profile} alt="" />
          </div>
        </div>

        <div className="contact">
          <h3 className="contact-title">Pour me contacter :</h3>
          <div className="contact-item address">
            <span className="icon">
              <FaHome />
            </span>
            <p>
              <span>34 allées des érables</span>
              <span>Domaine de Fayzeau</span>
              <span>33270 Bouliac</span>
            </p>
          </div>

          <div className="contact-item phone">
            <span className="icon">
              <FaPhoneSquareAlt />
            </span>
            <p>06 71 27 53 21</p>
          </div>

          <div className="contact-item email">
            <span className="icon">
              <FaEnvelopeOpen />
            </span>
            <a href="mailto:jgregoire@gmail.com">jgregoire@gmail.com</a>
          </div>
        </div>
        <div className="about-bg" />
      </div>
    </div>
  );
};

export default About;
