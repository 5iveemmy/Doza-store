import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Prodpage from "./pages/Prodpage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prodpage" exact component={Prodpage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
