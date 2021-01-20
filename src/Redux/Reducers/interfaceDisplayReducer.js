import { UPDATE_DISPLAY_TEXT } from "../actionTypes";

const initialState = {
  interfaceDisplayText: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DISPLAY_TEXT: {
      return {
        ...state,
        interfaceDisplayText: action.payload
      }
    }
    default:
      return state;
  }
}