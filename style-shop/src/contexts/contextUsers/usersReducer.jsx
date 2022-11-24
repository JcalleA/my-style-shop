import types from "../../types/types";

const usersReducer = (state, action) => {
  switch (action.type) {
    case types.userSetBarberos:
      return {
        ...state,
        barberos: action.payload,
      };
    case types.userResetBarberos:
      return {
        ...state,
        barberos: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
