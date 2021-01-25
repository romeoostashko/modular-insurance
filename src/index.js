import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import builderBurgerReducer from "./store/reducers/builderBurgerRDC";
import modulesReducer from "./store/reducers/modulesRDC";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootReducer = combineReducers({
  builderBurger: builderBurgerReducer,
  modules: modulesReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
