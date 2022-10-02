import React from "react";
import { useLocation, Link } from "react-router-dom";

const Event = () => {
  const location = useLocation();
  console.log(location);
  const eventList = location.state;
  const handleUpdateEvent = (id, e) => {
    console.log(id);
    console.log("e", e);
  };
  console.log("eventList", eventList);
  return (
    <div>
      {eventList.map((event) => (
        <>
          <h1>This is Event Name {event.title}</h1>
          <button onClick={() => handleUpdateEvent(event.id)}>Update</button>
        </>
      ))}
    </div>
  );
};

export default Event;
