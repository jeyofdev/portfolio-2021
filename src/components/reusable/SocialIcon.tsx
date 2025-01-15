import React from 'react';
import {
  FaGithubSquare,
  FaEnvelopeOpen,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { ISocialIconProps } from '../../interfaces/reusable.interface';

const SocialIcon = ({ title, className }: ISocialIconProps) => {
  const getSocialIcon = (icon: string): JSX.Element | null => {
    let output;

    switch (icon) {
      case 'github':
        output = <FaGithubSquare className={className} />;
        break;
      case 'email':
        output = <FaEnvelopeOpen className={className} />;
        break;
      case 'twitter':
        output = <FaTwitterSquare className={className} />;
        break;
      case 'linkedin':
        output = <FaLinkedin className={className} />;
        break;

      default:
        output = null;
    }

    return output;
  };

  return <>{getSocialIcon(title)}</>;
};

export default SocialIcon;
