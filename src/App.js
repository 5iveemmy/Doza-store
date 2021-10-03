import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import Boxes from "./Boxes/Boxes";
import MidBox from "./Boxes/MidBox";

function App() {
  return (
    <>
      <Route>
        <Navbar />
        <Boxes />
        {/* <MidBox /> */}
      </Route>
    </>
  );
}

export default App;
