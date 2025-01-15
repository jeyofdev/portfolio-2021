import { IContactLinkProps } from '@interfaces/ui.interface';

const Link = ({ href, icon, className = '' }: IContactLinkProps) => {
  return (
    <a className={className} href={href} target="blank">
      {icon}
    </a>
  );
};

export default Link;
