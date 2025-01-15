import Reveal from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';

import useWindowSize from '@hooks/useWindowSize';
import getNumberWithZero from '@utils/numbers';
import { ISkillProps } from '@interfaces/reusable.interface';
import { Fragment } from 'react/jsx-runtime';

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
                <Fragment key={index}>
                  <img id={`${data?.prefix}-${index}`} src={icon?.src} />
                  <Tooltip
                    anchorSelect={`#${data?.prefix}-${index}`}
                    content={icon?.name}
                    style={{ borderRadius: 8, textTransform: "uppercase" }}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skill;
