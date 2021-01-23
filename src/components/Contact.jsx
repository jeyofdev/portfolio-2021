import React from 'react';
import {
  FaShareAltSquare,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import '../styles/components/contact.scss';
import profile from '../img/jey026.png';

const Contact = () => {
  return (
    <div className="contact container">
      <div className="content">
        <div className="contact-content">
          <div className="contact-profile">
            <img src={profile} alt="" />
          </div>
        </div>

        <div className="contact">
          <h3 className="contact-title">Pour me contacter</h3>
          <div className="contact-item social">
            <span className="icon">
              <FaShareAltSquare />
            </span>
            <p>
              <a href="https://github.com/jeyofdev" target="blank">
                <FaGithubSquare />
              </a>

              <a href="https://twitter.com/JeremyGregoire" target="blank">
                <FaTwitterSquare />
              </a>
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
            <a href="mailto:jgregoire.pro@gmail.com">jgregoire.pro@gmail.com</a>
          </div>
        </div>
        <div className="contact-bg" />
      </div>
    </div>
  );
};

export default Contact;
