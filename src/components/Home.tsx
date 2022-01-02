import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar,
  FaGithubSquare,
  FaEnvelopeOpen,
  FaTwitterSquare,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import '../styles/components/home.scss';
import ModalText from './reusable/ModalText';
import aboutDatas from '../datas/about';
import Profile from '../img/profile-photo.jpg';

const Home = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState<string>('');

  const handleOpenModal = () => {
    setAboutIsOpen('anim-up');
  };

  const handleCloseModal = () => {
    setAboutIsOpen('anim-down');
  };

  return (
    <div className="home">
      <div className="home-intro">
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

            <div className="home-bottom">
              <button
                type="button"
                className="btn-open-modal"
                onClick={handleOpenModal}
              >
                + d&apos;info
              </button>
            </div>
          </div>
        </div>

        <div className="home-bg">
          <div className="bg-image" />
        </div>

        <div className={`content-about ${aboutIsOpen}`}>
          <button
            type="button"
            className="modal-close"
            onClick={handleCloseModal}
          >
            <FaTimes />
          </button>

          <div className="container about">
            <div className="about-photo">
              <img src={Profile} alt="jeremy gregoire profil" />
            </div>
            <div className="modal-content">
              <h3>Qui suis-je ?</h3>
              <p className="intro">
                Le monde du web est un domaine qui m&apos;a toujours passionné,
                c&apos;est donc tout naturellement que je m&apos;en suis
                rapproché professionnellement.
              </p>

              {aboutDatas.map((data) => (
                <ModalText key={data.id} title={data.title}>
                  {data.content}
                </ModalText>
              ))}

              <div className="modal-links">
                <Link to="/skills" className="modal-link">
                  Compétences
                </Link>
                <Link to="/portfolio" className="modal-link">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
