import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Prodpage from "./pages/Prodpage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prodpage" exact component={Prodpage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
