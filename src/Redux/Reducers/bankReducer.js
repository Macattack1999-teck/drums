import { CHANGE_BANK } from "../actionTypes";

const initialState = {
  bankIndex: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANK: {
      if (state.bank === 0) {
        return {
          ...state,
          bankIndex: 1
        }
      } else if (state.bank === 1) {
        return {
          ...state,
          bankIndex: 0
        }
      }
    }
    default:
      return state;
  }
}