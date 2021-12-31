/* eslint-disable object-curly-newline */
import React from 'react';
import '../../styles/components/reusable/button.scss';
import { IButtonProps } from '../../interfaces/reusable.interface';

const Button = ({ label, className, url, isDisable }: IButtonProps) => {
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

export default Button;
