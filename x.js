// --- Налаштування REDUX ----
//--index.js --

import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import builderBurgerReducer from "./store/reducers/builderBurgerRDC";

const rootReducer = combineReducers({
  builderBurger: builderBurgerReducer,
});

const store = createStore(rootReducer);
//---
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ----------------------------------
//-- reducer --

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case  :
      break;

    default:
      break;
  }
  return state;
};

export default reducer;

//----------------------------------------
//-- component --
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataToArrModules: () => dispatch({ type: typeAction.DATA_TO_ARR_MODULES }),
  };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modules);