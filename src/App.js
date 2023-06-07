import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowListScreen from "./components/screens/ShowListScreen";
import ShowDetailsScreen from "./components/screens/ShowDetailsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ShowListScreen} />
        <Route path="/shows/:id" component={ShowDetailsScreen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
