import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MyCourses from "./components/myCourses";
import SignIn from "./components/signIn";
import MyCart from "./components/myCart";
import CourseDetails from "./components/courseDetails";
import HomePage from "./pages/homepage";
import { connect } from "react-redux";


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: false
    };
  };

  render() {
    function SecuredRoute(props) {
      console.log('The props in App.js: ',props);
      return(
        <Route path={props.path} render={ data =>  props.auth.isAuthenticated ?
          (<props.component {...data}></props.component>):
          (<Redirect to={{pathname: '/login'}}></Redirect> )}></Route>
      )
      
    }
    return (
      <BrowserRouter basename="/">
      <div className="App">
       {/* <Navbar /> */}
        <Switch>
        <Route path='/' exact component={HomePage}></Route>
          <SecuredRoute path='/dashboard' exact component={HomePage} auth={this.props.auth} ></SecuredRoute>
          <SecuredRoute path='/mycourses' exact component={MyCourses} ></SecuredRoute>
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

const mapDispactchToProps = (dispatch) => ({
  // loadUser: () => dispatch(GetUser()),
 });
 
 const mapStateToProps = (state) => ({
   auth: state.auth,
 });
 
 export default connect(mapStateToProps, mapDispactchToProps)(App);