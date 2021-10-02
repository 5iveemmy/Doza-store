import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import Boxes from "./Boxes/Boxes";
import SmallBox from "./Boxes/SmallBox";

function App() {
  return (
    <>
      <Route>
        <Navbar />
        <SmallBox />
      </Route>
    </>
  );
}

export default App;
