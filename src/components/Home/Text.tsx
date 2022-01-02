import React from 'react';
import '../../styles/components/reusable/Text.scss';
import { ITextProps } from '../../interfaces/reusable.interface';

const Text = ({ title, children }: ITextProps) => {
  return (
    <div className="content-bloc">
      <h4>{title}</h4>
      <p className="content">{children}</p>
    </div>
  );
};

export default Text;
