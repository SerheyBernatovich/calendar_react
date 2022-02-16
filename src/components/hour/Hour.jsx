import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, removeEvent }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
      const eventStart = `${dateFrom.getHours()}:${formatMins(
        dateFrom.getMinutes()
      )}`;
      const eventEnd = `${dateTo.getHours()}:${formatMins(
        dateTo.getMinutes()
      )}`;

      let some = {
        title,
        height: (dateTo.getTime() - dateFrom.getTime()) / (1000 * 60),
        time: `${eventStart} - ${eventEnd}`,
        marginTop: dateFrom.getMinutes(),
        id,
      };
      return <Event some={some} key={id} removeEvent={removeEvent} />;
    })}
  </div>
);

export default Hour;
