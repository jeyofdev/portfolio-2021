import { keyframes } from '@emotion/react';

export const FadeInWidth = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 80%;
  }
  100% {
    width: 80%;
  }
`;

export const FadeInWidth100 = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
