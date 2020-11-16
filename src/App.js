import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Login/SignUp/SignUp';
import Login from './Components/Login/Login/Login';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import HuntPage from './Components/Bookings/HuntPage/HuntPage';
import HomeDetails from './Components/Home/HomeDetails/HomeDetails';


function App() {
  
  return (

    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <HomeDetails/>
        </Route>
        <Route path="/huntPage">
          <HuntPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;