import React from 'react';
import {
  FaShareAltSquare,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import '../styles/components/contact.scss';

const Contact = () => {
  return (
    <div className="contact container">
      <h1 className="contact-title">Pour me contacter</h1>

      <div className="content">
        <div className="contact">
          <div className="contact-item social">
            <div className="icon">
              <FaShareAltSquare />
            </div>
            <p>
              <a href="https://github.com/jeyofdev" target="blank">
                <FaGithubSquare />
              </a>

              <a href="mailto:jgregoire.pro@gmail.com" target="blank">
                <FaEnvelopeOpen />
              </a>

              <a href="https://twitter.com/JeremyGregoire" target="blank">
                <FaTwitterSquare />
              </a>

              <a
                href="https://www.linkedin.com/in/jeremy-gregoire/"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </p>
          </div>

          <div className="contact-item phone">
            <div className="icon">
              <FaPhoneSquareAlt />
            </div>
            <p>06 71 27 53 21</p>
          </div>

          <div className="contact-item email">
            <div className="icon">
              <FaEnvelopeOpen />
            </div>
            <a href="mailto:jgregoire.pro@gmail.com">jgregoire.pro@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
