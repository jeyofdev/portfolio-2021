import React from 'react';
import Reveal from 'react-awesome-reveal';

/* eslint-disable */
import { keyframes } from '@emotion/react';
/* eslint-disable */
import useWindowSize from '../../hook/useWindowSize';
import getNumberWithZero from '../../utils/numbers';
import { ISkillProps } from '../../interfaces/reusable.interface';

const Skill = ({
  data,
  currentNumber,
  totalNumber,
  animFullscreen,
  anim80,
  animContent,
}: ISkillProps) => {
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
        keyframes={size?.width >= 768 ? anim80 : animFullscreen}
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
            <div>
              {data.icons.map((icon, index) => (
                <img key={index} src={icon} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skill;
