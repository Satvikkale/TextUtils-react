import "./App.css";
import Navbar from "./componentss/Navbar";
import Textform from "./componentss/Textform";

import { useState } from "react";
import React from "react";
import Alert from "./componentss/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const ToggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={ToggleMode} /> <Alert alert={alert} />{" "}
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading=" Try TextUtils - Word counter, character counter, Remove Extra Spaces"
          mode={mode}
        />{" "}
      </div>
    </>
  );
}

export default App;
