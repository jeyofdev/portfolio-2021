import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import works from '../datas/works';
import Work from './reusable/Work';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/components/portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <OwlCarousel
        className="owl-theme"
        items={1}
        autoplay={false}
        loop
        merge
        margin={15}
        nav
        dots={false}
        animateOut="fadeOut"
      >
        {works.map((work) => (
          <Work
            key={work.id}
            data={work}
            currentNumber={work.id}
            totalNumber={works.length}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Portfolio;
