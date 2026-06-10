import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEvents = () => useContext(EventContext);

export default function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const updateEvent = (updated) => {
    setEvents(events.map(e => e.id === updated.id ? updated : e));
  };

  return (
    <EventContext.Provider value={{
      events,
      addEvent,
      deleteEvent,
      updateEvent
    }}>
      {children}
    </EventContext.Provider>
  );
}