import { Link } from 'react-router-dom';
import { INavLinkProps } from '@interfaces/ui.interface';

const NavLink = ({ to, id, onClick, title, subtitle }: INavLinkProps) => {
  return (
    <Link to={to} className={`menu-link link-${id}`} onClick={onClick}>
      <span className={`menu-link-name link-${id}`}>{title}</span>
      <span className={`menu-link-label link-${id}`}>{subtitle}</span>
    </Link>
  );
};

export default NavLink;
