import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';
import navBg1 from '../img/1.jpg';
import navBg2 from '../img/2.jpg';
import navBg3 from '../img/3.jpg';
import navBg4 from '../img/4.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classnameMenu, setClassnameMenu] = useState('menu menu-close');
  const [classnameBtnTrigger, setClassnameBtnTrigger] = useState('');
  const [classnameRevealer, setClassnameRevealer] = useState('block-revealer');
  const [classnameMenuInner, setClassnameMenuInner] = useState('menu-inner');

  const handleClickBtn = () => {
    setClassnameBtnTrigger(isOpen ? '' : ' is-open');

    setIsOpen(!isOpen);
    setClassnameMenu(isOpen ? 'menu menu-close' : 'menu menu-open');

    setClassnameRevealer(
      isOpen ? 'block-revealer animate-close' : 'block-revealer animate-open'
    );

    setClassnameMenuInner(
      isOpen ? 'menu-inner animate-close' : 'menu-inner animate-open'
    );

    setTimeout(() => {
      setClassnameRevealer('block-revealer');
    }, 1000);
  };

  const handleHover = (e) => {
    const ulElement = e.target.parentNode.parentNode.parentNode;

    ulElement.classList.add('bg-active');

    switch (e.target.classList[1]) {
      case 'link-1':
        ulElement.style.backgroundImage = `url(${navBg1})`;
        break;
      case 'link-2':
        ulElement.style.backgroundImage = `url(${navBg2})`;
        break;
      case 'link-3':
        ulElement.style.backgroundImage = `url(${navBg3})`;
        break;
      case 'link-4':
        ulElement.style.backgroundImage = `url(${navBg4})`;
        break;
      default:
        break;
    }
  };

  const handleLeave = (e) => {
    e.target.parentNode.parentNode.parentNode.style.backgroundImage = 'none';
    e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundImage =
      'none';
  };

  const handleClickLink = () => {
    handleClickBtn();
  };

  return (
    <div className="Navbar">
      <nav className={classnameMenu}>
        <button
          type="button"
          className={`btn-trigger${classnameBtnTrigger}`}
          id="btn-trigger"
          onClick={() => handleClickBtn()}
        >
          <span className="icon" />
          <span className="icon" />
          <span className="icon" />
        </button>
        <ul className={classnameMenuInner}>
          <li className="menu-item">
            <Link
              to="/"
              className="menu-link link-1"
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-1">Home</span>
              <span className="menu-link-label link-1">
                Retour à l&apos;accueil
              </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="/about"
              className="menu-link link-2"
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-2">Profile</span>
              <span className="menu-link-label link-2">
                Pour des informations
              </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="/skills"
              className="menu-link link-3"
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-3">Compétences</span>
              <span className="menu-link-label link-3">Mes spécialitées</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="/portfolio"
              className="menu-link link-4"
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleLeave(e)}
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-4">Portfolio</span>
              <span className="menu-link-label link-4">
                Mes derniers travaux
              </span>
            </Link>
          </li>
        </ul>
        <div className={classnameRevealer} />
      </nav>
    </div>
  );
};

export default Navbar;
