import React from "react";
import { RiInformationLine } from "react-icons/Ri";
import { BsArrowDownLeft, BsArrowUpRight, BsVoicemail } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/activityfeed.css";

const ActivityFeed = () => {
  const {
    data: activities,
    loading,
    error,
  } = useFetch("https://aircall-job.herokuapp.com/activities", {
    archiveCheck: true,
  });

  let navigate = useNavigate();

  // Loading spinner while fetching data
  if (loading) {
    return <Spinner />;
  }

  // if there is an error
  if (error) {
    toast.error(
      "There was an error processing your request! Please try again later!"
    );
  }

  // Select the appropriate icon
  const selectIcon = (direction, call_type) => {
    let color =
      call_type === "voicemail"
        ? "#FA8128"
        : call_type === "answered"
        ? "#45c022"
        : "#e53f34";

    if (call_type === "voicemail") {
      return <BsVoicemail color={color} />;
    } else if (direction === "inbound") {
      return <BsArrowDownLeft color={color} />;
    } else if (direction === "outbound") {
      return <BsArrowUpRight color={color} />;
    }
  };

  // Format the date properly based on time
  const createDate = (inputDate) => {
    let currTime = new Date();
    let callTime = new Date(inputDate);
    let timeDiff = currTime.getTime() - callTime.getTime();

    if (timeDiff > 24) {
      return `${callTime.getFullYear()}/${callTime.getMonth()}/${callTime.getDate()}`;
    } else {
      return callTime.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  return (
    <div className="wrapper" id="wrapperId">
      {!(activities === null || activities.length < 1) ? (
        <div>
          {activities.map((activity) => (
            <div key={activity.id} className="item">
              {/* direction */}
              {}
              <div className="icon">
                {selectIcon(activity.direction, activity.call_type)}
              </div>
              {/* to */}
              <div className="center">
                {activity.direction === "outbound" ? (
                  <div className="number">{activity.to}</div>
                ) : (
                  <div className="number">{activity.from}</div>
                )}

                <div className="description">
                  {(activity.call_type === "voicemail"
                    ? `Voicemail for `
                    : activity.direction === "inbound"
                    ? `Call to `
                    : `Call from `) + activity.via}
                </div>
              </div>
              <div className="right">
                <span className="time">{createDate(activity.created_at)}</span>
                <button
                  className="info-button"
                  onClick={() => {
                    navigate(`/activities/${activity.id}`);
                  }}
                >
                  <RiInformationLine size="2em" className="archive" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-inbox">
          <h3>No new activity</h3>
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
