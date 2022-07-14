import React from "react";
import ReactDom from "react-dom";
import LoginForm from "./components/login";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NotFound from "./components/notfound";
import ProtectedRoute from "./components/ProtectedRoute";
import Allproducts from "./components/AllProducts";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />

            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute exact path="/contact" component={Contact} />
            <ProtectedRoute exact path="/Products" component={Allproducts} />
            <Route exact path="/Not-Found" component={NotFound} />
            <Redirect to="/Not-Found" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));

//prime: praneetha, praneetha@2021/ nonprime: mosh, DevMosh22
