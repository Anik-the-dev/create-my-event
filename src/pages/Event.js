import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import birthdaycake from "../images/bdaycake.png";
import { FaPencilAlt } from "react-icons/fa";

const Event = () => {
  const location = useLocation();
  console.log(location);
  const eventList = location.state;
  const handleUpdateEvent = (id, e) => {
    toast("Feature will add soon");
  };
  console.log("eventList", eventList);
  return (
    <div>
      {eventList.map((event) => (
        <>
          <img
            src={event.eImage ? event.eImage : birthdaycake}
            alt="birthday-cake"
            className="card-img-part w-100"
          />
          <button onClick={() => handleUpdateEvent(event.id)}>
            <div className="next-btn m-top-1">
              <FaPencilAlt className="invite-icon  next-btn-icon " />
            </div>
          </button>
          <p>{event.title}</p>
          <p>{event.host}</p>
          <p>{event.location}</p>
        </>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Event;
