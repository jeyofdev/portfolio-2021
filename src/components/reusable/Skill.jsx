import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-awesome-reveal';

/* eslint-disable */
import { keyframes } from '@emotion/react';
/* eslint-disable */
import useWindowSize from '../../hook/useWindowSize';
import getNumberWithZero from '../../utils/numbers';

const Skill = ({
  data,
  currentNumber,
  totalNumber,
  animFullscreen,
  anim80,
  animContent,
}) => {
  const size = useWindowSize();

  /**
   * Return current number and total number
   */
  const getNumbers = () => {
    return `${getNumberWithZero(currentNumber)}/${getNumberWithZero(
      totalNumber
    )}`;
  };

  return (
    <div className={`skill ${data.id % 2 === 0 && 'inverse'}`}>
      <Reveal
        delay={500}
        keyframes={size.width >= 768 ? anim80 : animFullscreen}
        cascade
      >
        <div
          className="skill-image"
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </Reveal>
      <Reveal delay={1000} keyframes={animContent} cascade>
        <div className="skill-content">
          <div className="content">
            <span className="number">{getNumbers()}</span>
            <h2>{data.title}</h2>
            {/* <p>{data.content}</p> */}
            <p>
              {data.icons.map((icon) => (
                <img src={icon} />
              ))}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

Skill.propTypes = {
  data: PropTypes.shape().isRequired,
  currentNumber: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
  animFullscreen: PropTypes.shape().isRequired,
  anim80: PropTypes.shape().isRequired,
  animContent: PropTypes.shape().isRequired,
};

export default Skill;
