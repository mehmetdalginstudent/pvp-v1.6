import { useEffect, useRef } from 'react';

export const useTickerAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const animation = setInterval(animate, 30);

    return () => {
      clearInterval(animation);
    };
  }, []);

  return { containerRef };
};