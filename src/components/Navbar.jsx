import React, { useState } from 'react';
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classnameMenu, setClassnameMenu] = useState('menu menu--close');
  const [classnameRevealer, setClassnameRevealer] = useState('block-revealer');
  const [classnameMenuInner, setClassnameMenuInner] = useState('menu__inner');

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
    setClassnameMenu(isOpen ? 'menu menu--close' : 'menu menu--open');

    setClassnameRevealer(
      isOpen ? 'block-revealer animate-close' : 'block-revealer animate-open'
    );

    setClassnameMenuInner(
      isOpen ? 'menu__inner animate-close' : 'menu__inner animate-open'
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
            className="btn btn--menu"
            onClick={() => handleClickBtn()}
          >
            open
          </button>
        ) : (
          <button
            type="button"
            className="btn btn--close"
            onClick={() => handleClickBtn()}
          >
            fermer
          </button>
        )}
        <ul className={classnameMenuInner}>
          <li className="menu__item">
            <button type="button" className="menu__link">
              Work
            </button>
          </li>
          <li className="menu__item">
            <button type="button" className="menu__link">
              Play
            </button>
          </li>
          <li className="menu__item">
            <button type="button" className="menu__link">
              Chat
            </button>
          </li>
          <li className="menu__item">
            <button type="button" className="menu__link">
              Party
            </button>
          </li>
        </ul>
        <div className={classnameRevealer} />
      </nav>
    </div>
  );
};

export default Navbar;
