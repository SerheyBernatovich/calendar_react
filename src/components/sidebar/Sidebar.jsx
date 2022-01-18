import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index); // creating array with hours from 0 to 24

  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <div key={hour} className="time-slot">
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
