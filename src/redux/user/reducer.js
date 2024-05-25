import { IS_LOGGED } from "./actions";

const initialUser = {
  userLogged: false,
};
export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state,
        userLogged: !state.userLogged,
      };

    default:
      return state;
  }
};
