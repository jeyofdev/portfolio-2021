import React from 'react';
import {
  FaStar,
  FaGithubSquare,
  FaEnvelopeOpen,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import '../styles/components/home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="intro">
          <h3 className="home-name">
            <span>Bonjour</span>
            <span>
              <FaStar className="icon" />
            </span>
            <span>je suis jérémy grégoire</span>
          </h3>

          <h1 className="home-job">
            <span>développeur</span>
            <span>Full stack</span>
          </h1>

          <h3 className="home-city">
            <span>Bordeaux</span>
            <span>
              <FaStar className="icon" />
            </span>
            <span>France</span>
          </h3>

          <p className="social">
            <a
              href="https://github.com/jeyofdev"
              target="blank"
              className="social-link"
            >
              <FaGithubSquare className="social" />
            </a>
            <a
              href="mailto:jgregoire.pro@gmail.com"
              target="blank"
              className="social-link"
            >
              <FaEnvelopeOpen className="social" />
            </a>
            <a
              href="https://twitter.com/JeremyGregoire"
              target="blank"
              className="social-link"
            >
              <FaTwitterSquare className="social" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeremy-gregoire/"
              target="blank"
              className="social-link"
            >
              <FaLinkedin className="social" />
            </a>
          </p>
        </div>
      </div>

      <div className="home-bg">
        <div className="bg-image" />
      </div>
    </div>
  );
};

export default Home;
