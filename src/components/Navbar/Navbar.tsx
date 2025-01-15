import { useState } from 'react';
import navItems from '@datas/nav';
import { INavItem } from '@interfaces/items.interface';
import '@styles/components/navbar.scss';
import NavLink from '@components/Navbar/NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [classnameMenu, setClassnameMenu] = useState<string>('menu menu-close');
  const [classnameBtnTrigger, setClassnameBtnTrigger] = useState<string>('');
  const [classnameRevealer, setClassnameRevealer] =
    useState<string>('block-revealer');
  const [classnameMenuInner, setClassnameMenuInner] =
    useState<string>('menu-inner');

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

  return (
    <div className="Navbar">
      <nav className={classnameMenu}>
        <button
          type="button"
          className={`btn-trigger${classnameBtnTrigger}`}
          id="btn-trigger"
          onClick={handleClickBtn}
          aria-label="btn-trigger"
        >
          <span className="icon" />
          <span className="icon" />
          <span className="icon" />
        </button>

        <ul className={classnameMenuInner}>
          {navItems.map((navItem: INavItem) => (
            <li key={navItem.id} className="menu-item">
              <NavLink
                to={navItem.href}
                id={navItem.id}
                onClick={handleClickBtn}
                title={navItem.title}
                subtitle={navItem.subtitle}
              />
            </li>
          ))}
        </ul>

        <div className={classnameRevealer} />
      </nav>
    </div>
  );
};

export default Navbar;
