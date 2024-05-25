import { BUY_PHONE } from "./actions";
const initialState = {
  numberOfPhones: 50,
  airPad: 200,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        numberOfPhones: state.numberOfPhones - action.payload,
      };

    default:
      return state;
  }
};
