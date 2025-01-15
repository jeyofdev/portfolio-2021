import {
  FaShareAltSquare,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
} from 'react-icons/fa';
import social from '@datas/social';
import { ISocial } from '@interfaces/items.interface';
import '@styles/components/contact.scss';
import Link from '@components/reusable/Link';
import SocialIcon from '@components/reusable/SocialIcon';
import Icon from '@components/Contact/icon';

const Contact = () => {
  return (
    <div className="contact container">
      <h1 className="contact-title">Pour me contacter</h1>

      <div className="content">
        <div className="contact">
          <div className="contact-item social">
            <div className="icon">
              <FaShareAltSquare />
            </div>
            <p>
              {social.map((item: ISocial) => (
                <Link
                  key={item.id}
                  href={item.href}
                  icon={<SocialIcon title={item.title} className="social" />}
                />
              ))}
            </p>
          </div>

          <Icon className="phone" icon={<FaPhoneSquareAlt />}>
            <p>06 71 27 53 21</p>
          </Icon>

          <Icon className="email" icon={<FaEnvelopeOpen />}>
            <a href="mailto:jgregoire.pro@gmail.com">jgregoire.pro@gmail.com</a>
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Contact;
