import React from "react";
import { FaAngleRight, FaHandsHelping, FaHandSparkles } from "react-icons/fa";
import eventFrontImg from "../images/front.png";
import { eventData } from "../data-api/eventlistdata";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <p className="head-text text-center">
          Imagine if <span className="gradient-color-vio-blue">Snapchat</span>
          <br />
          had events.
        </p>
        <p className="head-sub-text text-center">
          Easily host and share events with your friends across any social
          media.
        </p>

        <div className="card">
          <img
            src={eventFrontImg}
            alt="birthday-cake"
            className="card-img-part"
          />
          <div className="card-container">
            <p className="card-head-text primary-text-dark-color fw-7">
              Movie night
            </p>
            <p className="card-head-sub-text">
              {" "}
              <FaHandSparkles className="invite-icon" /> Hosted by Anik
            </p>
            <div className="btn-card">
              <div className="d-grid-two-columns">
                <div className="btn-info">
                  <p>14 Responses -</p>
                  <a href="#">See guests</a>
                </div>
                <div className="btn d-flex invite-btn">
                  <p className="btn-text">
                    <FaHandsHelping className="invite-icon" />
                    Invite
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- ul list --> */}
            <ul className="list-event my-2">
              {eventData.map((listItem) => (
                <li className="d-grid-three-columns">
                  <div className="btn-icon d-flex">
                    <p>{<listItem.icon />}</p>
                  </div>
                  <div className=" list-text">
                    <p>{listItem.eventHead}</p>
                    <a href="#">{listItem.eventSub}</a>
                  </div>
                  <div className="btn-icon no-bg d-flex">
                    {/* <p className="list-arrow">{">"}</p> */}
                    <FaAngleRight className="list-arrow" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- create my event btn --> */}
        <div className="m-top-2 w-80 btn  btn-gradient d-flex">
          <Link to="/create" className="btn-link">
            <p className="btn-text">🎉 Create my event</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
