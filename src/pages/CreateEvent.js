import React, { useState, useEffect } from "react";
import "../styles/create-event.css";
import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import a from "../customizedJs/customized";
import eventFrontImg from "../images/front.png";
import UploadImage from "../components/UploadImage";
import {
  FaStreetView,
  FaFemale,
  FaForumbee,
  FaArrowRight,
} from "react-icons/fa";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingStart, setLoadingStart] = useState(false);
  const [title, setTitle] = useState("");
  const [host, setHost] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Click to set date and time");
  const [dateEnd, setEndDate] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [allEventData, setallEventData] = useState([]);
  const [eventId, setEventId] = useState(100);

  let eventData = [];

  let startDate = date?.day;
  let startHour = date?.hour;
  let startMin = date?.minute;

  const dateObj = new Date();
  let minYear = dateObj.getFullYear();
  let minMonth = dateObj.getMonth();
  let minDay = dateObj.getDate();

  const minDate = {
    year: minYear,
    month: minMonth + 1,
    day: minDay,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEventId(eventId + 1);
    console.log("input btn clicked");

    const obj = {
      id: eventId,
      title: title,
      host: host,
      location: location,
      start: date,
      end: dateEnd,
    };
    eventData = [...allEventData, obj];
    setallEventData(eventData);
    setLoadingStart(true);

    console.log("full", eventData);
    toast("Wow! Your Event is Created! Click Next Button to see details.");
  };
  console.log("all event data", allEventData);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleHostChange = (e) => {
    setHost(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleEventStartDate = (dateData) => {
    a();
    setDate(dateData);
  };
  const handleEventEndDate = (dateData) => {
    a();
    setEndDate(dateData);
  };
  return (
    <div className="event-body">
      <div className="event-container">
        <div className="event-head ">
          <p className="event-head-text">
            🎉 Create your{" "}
            <span className="gradient-color-vio-blue">event</span> here.
          </p>
          <p className="fs-3 neutral-dark-light-color">
            Add your event details here and event time.
          </p>
        </div>
        <div className="event-title">
          <form onSubmit={handleSubmit}>
            <label className="event-input-label">
              {" "}
              <FaForumbee className="invite-icon create-event-icon" />
              Event Name
            </label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="input-box"
            />
            <label className="event-input-label">
              {" "}
              <FaFemale className="invite-icon create-event-icon" />
              Event Host
            </label>
            <input
              type="text"
              value={host}
              onChange={handleHostChange}
              className="input-box"
            />
            <label className="event-input-label">
              {" "}
              <FaStreetView className="invite-icon create-event-icon" />
              Event Location
            </label>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              className="input-box"
            />
            <div>
              <p className="event-input-label">Event Start Date:</p>
              <DtPicker
                onChange={handleEventStartDate}
                withTime
                showTimeInput
                autoClose={false}
                minDate={minDate}
                placeholder="Click to set date and time"
              />
            </div>

            <div className="end-event-date">
              <p className="event-input-label">Event End Date:</p>

              <DtPicker
                onChange={handleEventEndDate}
                withTime
                autoClose={false}
                showTimeInput
                minDate={minDate}
                placeholder="Event end date"
              />
            </div>

            <UploadImage />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Link to="/event" state={allEventData}>
          <div className="next-btn ">
            <FaArrowRight className="invite-icon  next-btn-icon" />
          </div>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateEvent;
