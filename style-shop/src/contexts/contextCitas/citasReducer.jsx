import types from "../../types/types";

export const citasReducer = (state, action) => {
    switch (action.type) {
        case types.citasGetCitas:
          return {
            ...state,
            citas: action.payload,
          };
        case types.citasDeleteCita:
          return {
            ...state,
            citas: state.citas.filter((cita) => cita._id !== action.payload),
          };
        case types.citasSelectBarbero:
          return {
            ...state,
            barberSelected: action.payload,
          };
        case types.citasReset:
          return {
            citas: null,
            barberSelected: null,
          };
        default:
          return state;
    }
};