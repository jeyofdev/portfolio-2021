import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/reusable/ModalText.scss';

const ModalText = ({ title, children }) => {
  return (
    <div className="content-bloc">
      <h4>{title}</h4>
      <p className="content">{children}</p>
    </div>
  );
};

ModalText.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ModalText;
