import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Prodpage from "./pages/Prodpage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/prodpage" component={Prodpage} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
