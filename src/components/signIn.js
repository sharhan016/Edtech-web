import React, { Component } from 'react';
import { FcEngineering } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Login as login } from "../store/actions/Auth";


class SignIn extends Component {

  state={
    name: '',
    email: '',
    password: '',
}
handleChange = (e) => {
  this.setState({
      [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  //this.props.history.push('/dashboard');
  let { email, password, name } = this.state
  let body = {
    full_name: name,
    email: email,
    password: password,
  }
  //this.props.login(body);
  console.log(this.state);

}

  render() {
    return (
      <div className="text-gray-900" style={{ boxSizing: "border-box" }}>
        <div className="flex items-center px-10 py-12 border-b-2 border-gray-300 overflow ">
          <div className="flex flex-col items-center">
            <div className="-mb-3">
              <FcEngineering color="blue" size="6em" />
            </div>
            <div className="py-0.5 -mt-3 text-xl font-extrabold tracking-wider bg-white ">
              Tech <span className="text-teal">Factory</span>
            </div>
          </div>
          <div className="ml-16 font-medium text-1xl">Categories</div>
          <div className="relative pl-4 pr-10 py-2.5 ml-16 border-2 border-gray-400 rounded-full">
            <div className="absolute inset-y-0 flex flex-col justify-center ml-1">
              <FaSearch size="25px" color="#4B5563" />
            </div>
            <input
              style={{ wordSpacing: 10 }}
              className="p-2 ml-12 tracking-widest"
              type="text"
              placeholder="Search for anything"
            />
          </div>
          <div className="ml-40 space-x-9 ">
            <button className="w-32 font-semibold rounded-xl text-teal py-3 ring-2 ring-teal text-1xl">
              Login
            </button>
            <button className=" rounded-xl font-semibold  py-3 bg-blue-500 ring-2 ring-blue-500 w-32  text-white text-1xl">
              Sign Up
            </button>
          </div>
        </div>
  
        <div className="px-12 py-20">
          <div className="flex justify-center">
            <div className="mt-6">
              <div className="text-5.5xl text-center font-medium tracking-wide text-gray-700">
                Sign In
              </div>
              <div className="mt-20 space-y-6">
                <div className="px-28 py-6  bg-red-700  text-3xl  text-white">
                  sign up with google
                </div>
                <div className="px-28 py-6 bg-blue-800  text-3xl  text-white">
                  Sign up with facebook
                </div>
              </div>
              <div className="text-3xl my-10 font-medium text-center">OR</div>
              <form className="inline-block " onSubmit={this.handleSubmit}>
                <div className="space-y-11">
                  <div className="px-16 py-6   text-3xl border-4 border-gray-400  text-white">
                    <input id="name" type="text" placeholder="Full Name" className="" onChange={this.handleChange} style={{color: "black"}} />
                  </div>
                  <div className="px-16 py-6   text-3xl border-4 border-gray-400  text-white">
                    <input id="email" type="text" placeholder="Email" className="" onChange={this.handleChange} style={{color: "black"}}/>
                  </div>
                  <div className="px-16 py-6   text-3xl border-4 border-gray-400  text-white">
                    <input id="password" type="text" placeholder="Password" className="" onChange={this.handleChange} style={{color: "black"}}/>
                  </div>
                </div>
  
                <div className="px-28 py-6 bg-blue-400 my-16 text-center font-medium text-4.5xl  text-white" onClick={this.handleSubmit}>
                  Sign Up
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-20 pb-20 pt-40 bg-teal">
          <div className="grid grid-cols-3 grid-rows-3">
            <div className="text-2xl space-y-6 text-white font-medium">
              <div className="">Courses</div>
              <div className="">About Us</div>
              <div className="">Contact Us</div>
            </div>
            <div className="text-2xl space-y-6 text-white font-medium">
              <div className="">Terms and Conditions</div>
              <div className="">FAQs</div>
            </div>
            <div className="row-span-3 flex flex-col justify-end items-end">
              <div className="flex flex-col items-center mr-2">
                <div className="-mb-3">
                  <FcEngineering color="blue" size="6em" />
                </div>
                <div className="pt-0.5 -mt-3 text-xl font-extrabold tracking-wider bg-teal text-white">
                  Tech <span className="">Factory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));

