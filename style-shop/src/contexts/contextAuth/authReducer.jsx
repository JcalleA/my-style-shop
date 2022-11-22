import types from "../../types/types";

const authReducer = (state, action) => {
    switch (action.type) {
        case types.authRefreshToken:
            return {
                ...state,
                token: action.payload.token,

            };
        case types.authLogout:
            return {
                token: "",
                user: {},
            };
        case types.userEdit:
            return {
                ...state,
                user: {...state.user, ...action.payload },
            };
        default:
            return state;
    }
};

export default authReducer;