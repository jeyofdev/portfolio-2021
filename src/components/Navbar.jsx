import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

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
              to="/skills"
              className="menu-link link-3"
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
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-4">Portfolio</span>
              <span className="menu-link-label link-4">
                Mes derniers travaux
              </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              to="/contact"
              className="menu-link link-2"
              onClick={(e) => handleClickLink(e)}
            >
              <span className="menu-link-name link-2">Contact</span>
              <span className="menu-link-label link-2">Pour me contacter</span>
            </Link>
          </li>
        </ul>
        <div className={classnameRevealer} />
      </nav>
    </div>
  );
};

export default Navbar;
