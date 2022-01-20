import React from 'react';

const TodayLine = () => {
  const [lineHeight, setLineHeight] = React.useState({
    top: new Date().getMinutes() + new Date().getHours() * 59,
  });

  React.useEffect(() => {
    const currentTimeout = setInterval(() => {
      setLineHeight({
        top: new Date().getMinutes() + new Date().getHours() * 59,
      });
    }, 60000);

    return () => {
      clearInterval(currentTimeout);
    };
  }, []);

  return <div className="current-day-line" style={lineHeight}></div>;
};

export default TodayLine;
