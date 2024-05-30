import "./App.css";
import { CustomRoute } from "./CustomRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <CustomRoute />
      </Router>
    </>
  );
}

export default App;
