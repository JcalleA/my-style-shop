import React, { useCallback, useReducer } from "react";
import Swal from "sweetalert2";
import { getUrlBarberos } from "../../helpers/getUrls";
import { fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";

import contextUsers from "./contextUsers";
import usersReducer from "./usersReducer";

const initialState = {
    barberos: null,
};

  const UsersState = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    const { barberos } = state;
  
    const getBarberos = useCallback(async () => {
      const url = getUrlBarberos();
      const res = await fetchToken(url);
      const resjson = await res.json();
  
      if (!resjson.ok) {
        await Swal.fire("error", resjson.msg, "error");
        throw new Error(resjson.msg);
      }
      dispatch({ type: types.userSetBarberos, payload: resjson.empleados });
    }, []);
    const resetBarberos = useCallback(() => {
      dispatch({ type: types.userResetBarberos });
    }, []);
  
    return (
      <contextUsers.Provider value={{ getBarberos, resetBarberos, barberos }}>
        {children}
      </contextUsers.Provider>
    );
  };

export default UsersState;