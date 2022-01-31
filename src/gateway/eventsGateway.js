const baseUrl = 'https://61e57c8bc14c7a0017124cc1.mockapi.io/calendarEvents';

export const sendEventToApi = (eventData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });

export const fetchEvents = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res;
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't delete event");
    }
  });
