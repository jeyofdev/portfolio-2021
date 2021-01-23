import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/reusable/button.scss';

const Button = ({ label, className, url, isDisable }) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`${className} ${!isDisable ? 'is-disable' : ''}`}
      data-text={label}
      rel="noopener noreferrer"
    >
      <span>{label}</span>
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
};

export default Button;
