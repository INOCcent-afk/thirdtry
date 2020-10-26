import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
