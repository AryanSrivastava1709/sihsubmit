import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Parent from "./components/routes/Parent";
import NotFound from "./components/layouts/NotFound";
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";
import { useEffect } from "react";
import toast from "react-hot-toast";

function App() {
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
  };

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    toast("kahe right click kar rahe bhai?", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  });
  return (
    <>
      <AppContextProvider>
        <Router>
          {/* // visible on all pages */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Parent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </>
  );
}

export default App;
