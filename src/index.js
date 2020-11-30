import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import axios from "axios";
import thunk from "redux-thunk";

let token = localStorage.getItem("token");
axios.defaults.headers["Authorization"] = `${token}`;
axios.defaults.baseURL = "https://api-edtech.datavivservers.in/";

const store = createStore(rootReducer, applyMiddleware(thunk))
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")