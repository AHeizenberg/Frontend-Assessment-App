import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

import Spinner from "../components/Spinner.jsx";

// Import css
import "../css/activitydetail.css";

// Import toastify
import { toast } from "react-toastify";

// Import react icons
import { IoChevronBack, FaRegUserCircle } from "react-icons/all";
import { RiInboxArchiveFill } from "react-icons/Ri";
import { IoCall } from "react-icons/io5";
import { IoIosText } from "react-icons/io";

const ActivityDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const {
    data: activity,
    loading,
    error,
  } = useFetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
    archiveCheck: false,
  });

  // Loading spinner while fetching data
  if (loading) {
    return <Spinner />;
  }

  // If there is an error than take the user back
  if (error) {
    navigate("/");
  }

  const archiveCall = () => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
        is_archived: true,
      })
      .then(() => {
        toast.success("Call archived");
        navigate("/");
      })
      .catch(() => {
        toast.error("Unable to archive call, please try again later!");
      })
      .finally(() => {});
  };

  // Format date properly based on type
  // @params: type data
  // @result: String with appropriate time
  const dateFormatter = (type, date) => {
    if (type === "time") {
      return new Date(date).toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (type === "date") {
      let callTime = new Date(date);
      return `${callTime.getFullYear()}/${callTime.getMonth()}/${callTime.getDate()}`;
    }
  };

  return (
    <div className="detail-wrapper">
      <div className="details-header">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="back-button"
        >
          <IoChevronBack size="2em" />
          Inbox
        </div>
        <div className="details-title"></div>
      </div>

      {activity !== null ? (
        <div className="call-item">
          <div className="caller">
            <FaRegUserCircle size="4rem" />
            <h1 className="call-number">
              {activity.direction === "outbound" ? activity.to : activity.from}
            </h1>
          </div>

          <div className="icons-grid">
            {/* call button */}
            <button
              className="activity-icon"
              onClick={() => {
                toast.warn(
                  "This feature is under development! Please try again later!"
                );
              }}
            >
              <IoCall size="1.5rem" />
              <p>Call</p>
            </button>

            {/* message button */}
            <button
              className="activity-icon"
              onClick={() => {
                toast.warn(
                  "This feature is under development! Please try again later!"
                );
              }}
            >
              <IoIosText size="1.5rem" />
              <p>Message</p>
            </button>

            {/* Archive button */}
            <button
              className="activity-icon archive-icon"
              onClick={() => {
                archiveCall();
              }}
            >
              <RiInboxArchiveFill size="1.5rem" />
              <p>Archive</p>
            </button>
          </div>

          <div className="callDetails-container">
            <div className="callDetails">
              <p className="card-heading">Call Details</p>
              <p className="call-details-body">
                {(activity.call_type === "voicemail"
                  ? `Voicemail for ${activity.via} recevied at `
                  : activity.direction === "inbound"
                  ? `Call to ${activity.via} received at `
                  : `Call from ${activity.via} placed at `) +
                  `${dateFormatter(
                    "time",
                    activity.created_at
                  )} on ${dateFormatter("date", activity.created_at)}`}
              </p>
              <p className="call-details-body">{`This call lasted for ${secondsToHms(
                activity.duration
              )}`}</p>

              <p className="call-details-body">
                {activity.direction === "outbound"
                  ? `This call was placed from ${activity.from}`
                  : ``}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// Function used from: https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
  return hDisplay + mDisplay;
}

// EOF

export default ActivityDetail;
