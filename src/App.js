import React from "react";
import { Route, Routes } from "react-router-dom";

// Import pages
import ActivityFeed from "./pages/ActivityFeed.jsx";
import Contacts from "./pages/Contacts.jsx";
import Settings from "./pages/Settings.jsx";
import Keypad from "./pages/Keypad.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";

// Import components
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Error from "./components/Error.jsx";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Header className="heading" />
      <Routes>
        <Route path="/" element={<ActivityFeed className="container-view" />} />
        <Route
          path="/activities/:id"
          element={<ActivityDetail className="container-view" />}
        />
        <Route
          path="/contacts"
          element={<Contacts className="container-view" />}
        />
        <Route
          path="/settings"
          element={<Settings className="container-view" />}
        />
        <Route path="/keypad" element={<Keypad className="container-view" />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Navigation className="navbar" />
      <ToastContainer />
    </div>
  );
}

export default App;
