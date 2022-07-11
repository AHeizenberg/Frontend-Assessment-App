import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Settings = () => {
  const resetCall = () => {
    axios
      .get(`https://aircall-job.herokuapp.com/reset`)
      .then(() => {
        toast.success("All call's status are reseted!");
      })
      .catch(() => {
        toast.error("Unable to reset calls, please try again later!");
      })
      .finally(() => {});
  };

  return (
    <div className="under-development-containter">
      <button
        className="clear-btn"
        onClick={() => {
          resetCall();
        }}
      >
        <p>Reset all calls</p>
      </button>
    </div>
  );
};

export default Settings;
