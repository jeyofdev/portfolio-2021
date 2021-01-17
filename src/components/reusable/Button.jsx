import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/reusable/button.scss';

const Button = ({ label, className }) => {
  return (
    <button
      type="button"
      target="_blank"
      className={className}
      data-text={label}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
