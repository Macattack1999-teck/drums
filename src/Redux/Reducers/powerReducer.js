import { TOGGLE_POWER } from "../actionTypes";

const initialState = {
  powerOn: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POWER: {
      return {
        ...state,
        powerOn: !state.powerOn
      }
    }
    default:
      return state;
  }
}