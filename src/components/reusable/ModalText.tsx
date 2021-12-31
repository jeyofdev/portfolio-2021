import React from 'react';
import '../../styles/components/reusable/ModalText.scss';
import { IModalTextProps } from '../../interfaces/reusable.interface';

const ModalText = ({ title, children }: IModalTextProps) => {
  return (
    <div className="content-bloc">
      <h4>{title}</h4>
      <p className="content">{children}</p>
    </div>
  );
};

export default ModalText;
