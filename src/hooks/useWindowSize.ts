import { useState, useEffect } from 'react';
import { IWindowSize } from '@interfaces/hooks.interface';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
