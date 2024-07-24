import React, { useEffect, useLayoutEffect, useState } from "react";

interface NumberAnimationProps {
  start: number;
  end: number;
  duration?: number;
  css?: React.CSSProperties;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({
  start,
  end,
  duration = 1000,
  css,
}) => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    setValue(start);
  }, []);

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (startTimestamp === null) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(start, end, duration);
  }, [start, end, duration]);

  return (
    <div style={css} className="number-animation">
      {value}
    </div>
  );
};

export default NumberAnimation;
