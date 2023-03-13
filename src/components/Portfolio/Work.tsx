import React from 'react';
import getNumberWithZero from '../../utils/numbers';
import Button from '../reusable/Button';
import { IWorkProps } from '../../interfaces/reusable.interface';

const Work = ({ data, currentNumber, totalNumber }: IWorkProps) => {
  /**
   * Return current number and total number
   */
  const getNumbers = () => {
    return `${getNumberWithZero(currentNumber)}/${getNumberWithZero(
      totalNumber,
    )}`;
  };

  return (
    <div className="work">
      <div
        className="work-image"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="mask" />
        <img src={data.mockup} alt={`mockup ${data.title}`} />
      </div>
      <div className="work-content">
        <div className="text-inner">
          <span className="number">{getNumbers()}</span>
          <div className="content">
            <h2>{data.title}</h2>
            <p className="description">{data.content}</p>
            <p className="logos">
              {data.techno.map((techno: string, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <img key={index} src={techno} alt="icon" />
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
              <span className="is-disabled btn-more py-3">Bientôt en ligne</span>
            )}

            {data.code && (
              <Button
                label="Le code"
                className="btn-more"
                url={data.code}
                isDisable={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
