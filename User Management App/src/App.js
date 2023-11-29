import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ManageRoute from "./router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ManageRoute />
    </div>
  );
}

export default App;
