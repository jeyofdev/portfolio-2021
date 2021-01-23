import React from 'react';
import PropTypes from 'prop-types';
import getNumberWithZero from '../../utils/numbers';
import Button from './Button';

const Work = ({ data, currentNumber, totalNumber }) => {
  /**
   * Return current number and total number
   */
  const getNumbers = () => {
    return `${getNumberWithZero(currentNumber)}/${getNumberWithZero(
      totalNumber
    )}`;
  };

  return (
    <div className="work">
      <div
        className="work-image"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="work-content">
        <div className="text-inner">
          <span className="number">{getNumbers()}</span>
          <div className="content">
            <h2>{data.title}</h2>
            <p className="description">{data.content}</p>
            <p className="logos">
              {data.techno.map((techno) => (
                <img src={techno} alt="icon" />
              ))}
            </p>

            {data.isOnline ? (
              <Button
                label={data.isOnline ? 'voir le site' : 'Bientôt en ligne'}
                className="btn-more"
                url={data.link}
                isDisable={data.isOnline}
              />
            ) : (
              <span className="is-disabled" type="button">
                Bientôt en ligne
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  data: PropTypes.shape().isRequired,
  currentNumber: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
};

export default Work;
