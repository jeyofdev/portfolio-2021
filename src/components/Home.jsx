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
import Modal from 'react-modal';
import ModalText from './reusable/ModalText';
import aboutDatas from '../datas/about';

Modal.setAppElement('#root');

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(31, 30, 30, .8)',
    zIndex: 1000,
  },
  content: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '750px',
    maxHeight: '80vh',
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '7px',
    outline: 'none',
    padding: '20px',
  },
};

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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

          <div className="home-bottom">
            <button
              type="button"
              className="btn-open-modal"
              onClick={handleOpenModal}
            >
              + d&apos;info
            </button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={modalStyles}
          >
            <button
              type="button"
              className="modal-close"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>

            <div className="modal-content">
              <h3>Qui suis-je ?</h3>
              <p className="intro">
                Le monde du web est un domaine qui m&apos;a toujours passionné,
                c&apos;est donc tout naturellement que je m&apos;en suis
                rapproché professionnellement.
              </p>

              {aboutDatas.map((data) => (
                <ModalText key={data.key} title={data.title}>
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
          </Modal>
        </div>
      </div>

      <div className="home-bg">
        <div className="bg-image" />
      </div>
    </div>
  );
};

export default Home;
