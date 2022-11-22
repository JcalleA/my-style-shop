import React, { useCallback, useEffect, useReducer } from "react";
import Swal from "sweetalert2";

import types from '../../types/types';
import authReducer from "./authReducer";
import contextAuth from "./ContextAuth";
import { fetchSinToken, fetchToken } from "../../helpers/peticiones";
import { 
getUrlLoginEmpleado,
getUrlValidAdmin,
getUrlUpdateEmpleado,
getUrlRefrescar,
getUrlNewEmpleado,
getUrlDeleteCorte,
getUrlLoginEmpleado,
getUrlUpdateCliente,
getUrlNewUser

 } from "../../helpers/getUrls";

const initialState = {
    toke: null,
    user: {},
};

const AuthState = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const { token, user } = state;

    useEffect(() => {
        async function refrescandoToken() {
          await refreshToken();  
        }
        refrescandoToken();
    }, []);

    const refreshToken = async () => {
        const url = getUrlRefrescar();
        const res = await fetchToken(url);
        const resJson = await res.json();

        if (!resJson.ok) {
            if (localStorage.getItem("token")) {
                await Swal.fire(
                    "error",
                    "tu sesion finalizo, inicia sesion nuevamente.",
                    "error"
                );
            }
            setNuevoToken();
            localStorage.clear();
            return;
        }
        if (user.id !== resJson.user.id) {
            loginUser(resJson);
        } else {
            setNuevoToken(resJson.token);
        }
    }

    const setNuevoToken = (token = "") => {
        dispatch({ type: types.authRefreshToken, payload: token })
    }

    const startRegister = useCallback(async (data, type) => {
       const url = type === "user" ? getUrlNewUser(): getUrlNewEmpleado();
       try {
          const res = await fetchSinToken(url, data, "POST");
          const resJson = await res.json();
          const mensaje = resJson.msg;

          if (!resJson.ok) {
            await Swal.fire("error", mensaje, "error");
          } else {
            await Swal.fire("Bien!", "Se registo exitosamente!", "success");
            loginUser(resJson);
          }
       } catch (error) {
        console.error(error);
       }
    }, []);
    const loginUser = useCallback((data) => {
        const { token, user } = data;
        localStorage.setItem("token", token);
        dispatch({
            type: types.authLogin,
            payload: { token, user },
        });
    }, []);

    const startLogin = useCallback(async (data, type) => {
        const url = type === "empleado" ? getUrlLoginEmpleado() : getUrlNewUser();
        try {
            const res = await fetchSinToken(url, data, "POST");
            const resJson = await res.json();
            if (!resJson.ok) {
                Swal.fire("Error", resJson.msg, "error");
            } else {
                loginUser(resJson);
            } 
        } catch (error) {
            console.error(error);
        }
    }, []);

    const signOutSession = useCallback(() => {
        localStorage.removeItem("token");
        dispatch({ type: types.authLogout });
    }, []);

    const validarAdmin = useCallback(async (data) => {
        const url = getUrlValidAdmin();
        const res = await fetchSinToken(url, data, "POST");
        const resJson = await res.json();

        if (!resJson.ok) {
            Swal.fire("Error", resJson.msg, "error");
            return false;
        } else {
            return true;
        }
    }, []);

    const editarUser = useCallback(
        async (data, id) => {
            let url;
            if (data.calificacion) {
                url = getUrlUpdateEmpleado(id);
            } else {
                url = 
                    user.type === "empleado" 
                    ? getUrlUpdateEmpleado(user.id)
                    : getUrlUpdateCliente(user.id);
            }
            try {
                const res = await fetchToken(url, data, "PUT");
                const resJson = await res.json();
                if (!resJson.ok) {
                    await Swal.fire("Error", resJson.msg, "error");
                    return;
                }
                if (!id) {
                    dispatch({ type: types.userEdit, payload: resJson.user });
                }
                await Swal.fire("Listo", "actualizacion exitosa", "success");

            } catch (error) {
                console.error(error);
            }
        },
        [user]
    );

    const deleteCorte = useCallback(
        async (data) => {
            const url = getUrlDeleteCorte(user.id);
            try {
                const res = await fetchToken(url, data, "PUT");
                const resJson = res.json();
                if (!resJson.ok) {
                    await Swal.fire("Error", resJson.msg, "error");
                    return;
                }
                dispatch({ type: types.userEdit, payload: resJson.user })
            } catch (error) {
                console.error(error)
            }
        },
        [user]
    );

    return (
        <contextAuth.Provider
        value={{
            token, 
            user,
            loginUser,
            startLogin,
            validarAdmin,
            signOutSession,
            editarUser,
            deleteCorte
        }}
        >
            {children}
        </contextAuth.Provider>
    );
};  

export default AuthState; 