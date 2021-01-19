import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/components/home.scss';

const Home = () => {
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
        </div>
      </div>

      <div className="home-bg">
        <div className="bg-image" />
      </div>
    </div>
  );
};

export default Home;
