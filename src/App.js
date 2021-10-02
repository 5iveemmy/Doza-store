import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Route>
        <Navbar />
      </Route>
    </>
  );
}

export default App;
