import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Parent from "./components/routes/Parent";
import NotFound from "./components/layouts/NotFound";
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";

function App() {
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
