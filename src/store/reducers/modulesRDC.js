import * as typeAction from "../actions";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.DATA_TO_ARR_MODULES:
      return {
        arrModules: action.arr,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
