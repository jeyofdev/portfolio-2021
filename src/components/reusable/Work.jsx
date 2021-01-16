import React from 'react';
import PropTypes from 'prop-types';
import getNumberWithZero from '../../utils/numbers';

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

            <button
              type="button"
              target="_blank"
              className="btn btn-more"
              data-text="Voir le site"
            >
              <span>Voir le site</span>
            </button>
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
