import React from 'react';

import './event.scss';
import EventDeleteModal from './EventDeleteModal.jsx';

const Event = ({ some, removeEvent }) => {
  const { height, marginTop, title, time, id } = some;
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <div style={eventStyle} className="event" onClick={toggleModal}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isShowModal && <EventDeleteModal removeEvent={removeEvent} id={id} />}
    </div>
  );
};

export default Event;
