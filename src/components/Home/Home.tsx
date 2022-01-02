import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/components/home.scss';
import LinkItem from '../reusable/Link';
import social from '../../datas/social';
import { ISocial } from '../../interfaces/items.interface';
import About from './About';
import SocialIcon from '../reusable/SocialIcon';

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
              {social.map((item: ISocial) => (
                <LinkItem
                  key={item.id}
                  href={item.href}
                  icon={<SocialIcon title={item.title} className="social" />}
                  className="social-link"
                />
              ))}
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

        <About aboutIsOpen={aboutIsOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Home;
