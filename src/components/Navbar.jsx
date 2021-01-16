import React, { useState } from 'react';
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classnameMenu, setClassnameMenu] = useState('menu menu-close');
  const [classnameRevealer, setClassnameRevealer] = useState('block-revealer');
  const [classnameMenuInner, setClassnameMenuInner] = useState('menu-inner');

  const handleClickBtn = () => {
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

  return (
    <div className="Navbar">
      <nav className={classnameMenu}>
        {!isOpen ? (
          <button
            type="button"
            className="btn btn-menu"
            onClick={() => handleClickBtn()}
          >
            open
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-close"
            onClick={() => handleClickBtn()}
          >
            fermer
          </button>
        )}
        <ul className={classnameMenuInner}>
          <li className="menu-item">
            <button type="button" className="menu-link">
              <span className="menu-link-name">Home</span>
              <span className="menu-link-label">Retour à l&apos;accueil</span>
            </button>
          </li>
          <li className="menu-item">
            <button type="button" className="menu-link">
              <span className="menu-link-name">Profile</span>
              <span className="menu-link-label">Pour des informations</span>
            </button>
          </li>
          <li className="menu-item">
            <button type="button" className="menu-link">
              <span className="menu-link-name">Compétences</span>
              <span className="menu-link-label">Mes spécialitées</span>
            </button>
          </li>
          <li className="menu-item">
            <button type="button" className="menu-link">
              <span className="menu-link-name">Portfolio</span>
              <span className="menu-link-label">Mes derniers travaux</span>
            </button>
          </li>
        </ul>
        <div className={classnameRevealer} />
      </nav>
    </div>
  );
};

export default Navbar;
