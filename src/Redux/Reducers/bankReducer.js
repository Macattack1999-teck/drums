import { BankData } from "../../Data/BankData";
import { CHANGE_BANK } from "../actionTypes";

const initialState = {
  bank: BankData[0],
  bankTwoActive: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANK: {
      if (state.bankTwoActive) {
        return {
          ...state,
          bankTwoActive: false,
          bank: BankData[0]
        }
      } else {
        return {
          ...state,
          bankTwoActive: true,
          bank: BankData[1]
        }
      }
    }
    default:
      return state;
  }
}