import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyCourses from "./components/myCourses";
import SignIn from "./components/signIn";
import MyCart from "./components/myCart";
import CourseDetails from "./components/courseDetails";
import HomePage from "./pages/homepage";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
      <div className="App">
       {/* <Navbar /> */}
        <Switch>
        <Route path='/' exact component={HomePage}></Route>
          <Route path='/dashboard' exact component={HomePage} ></Route>
          <Route path='/mycourses' exact component={MyCourses} ></Route>
          <Route path='/login' component={SignIn}></Route>
          <Route path='/coursedetails' component={CourseDetails}></Route>
          <Route path='/mycart' component={MyCart}></Route>
          {/* <Route path='/register' component={SignUp}></Route>
          <Route path='/stalldisplay' component={StallDisplay}></Route> */}
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
