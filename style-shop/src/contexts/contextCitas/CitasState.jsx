import React, { useCallback, useReducer } from "react";
import Swal from "sweetalert2";
import {
    getUrlCitas,
    getUrlDeleteCita,
    getUrlnewCita,
    getUrlUpdateCita,
} from "../../helpers/getUrls";
import { fecthToken, fetchToken } from "../../helpers/peticiones";
import types from "../../types/types";
import { citasReducer } from "./citasReducer";
import contextCitas from "./contextCitas";

const initialState = {
    citas: null,
    setBarberos: null,
}
const CitasState = ({ children }) => {
    const [state, dispatch] = useReducer(citasReducer, initialState);
    const { citas, selectdBarberos } = state;

    const crearCita = useCallback(async (data) => {
        url = getUrlnewCita();
        try {
            const res = await fecthToken(url, data, "POST");
            const resJson = await res.json();
            if (!resJson.ok) {
                await Swal.fire("error", resJson.msg, "error");
                return;
            } 
            await obtenerCitas();
            await Swal.fire("Listo", resJson.msg, "success");
        } catch (error) {
            console.error(error);
        }
    }, [])
    const obtenerCitas  = useCallback(async () => {
        const url = getUrlCitas();
        try {
            const res = await fecthToken(url);
            const resJson = await res.json();
            if (!resJson.ok) {
                await Swal.fire("Error", resJson.msg, "error");
            }
            dispatch({ type: types.citasGetCitas, payload: resJson.citas });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const eliminarCitas = useCallback(async (id) => {
        const url = getUrlDeleteCita(id);
        try {
            const res = await fecthToken(url, "", "DELETE");
            const resJson = await res.json();
            if (!resJson.ok) {
                await Swal.fire("Error", "Tu cita ha sido eliminada.", "success");
                return;
            }
            eliminarCitaState(id);
            await Swal.fire("Eliminada", "Tu cita fue eliminada correctamente", "success");
        } catch (error) {
            console.error(error);
        }
    }, []);

    const eliminarCitaState = (id) => {
        dispatch( {type: types.citasDeleteCita, payload: id});
    };

    const editarCita = useCallback(async (id, data) => {
        const url = getUrlUpdateCita(id);
        try {
          const res = await fetchToken(url, data, "PUT");
          const resjson = await res.json();
          if (!resjson.ok) {
            await Swal.fire("error", resjson.msg, "error");
            return;
          }
          await getCitas();
          await Swal.fire("Listo!", resjson.msg, "success");
        } catch (error) {
          console.log(error);
        }
    }, []);
    
    const selectBarbero = useCallback((data) => {
        dispatch({ type: types.citasSelectBarbero, payload: data });
    }, []);
    const resetCitas = useCallback(() => {
        dispatch({ type: types.citasReset });
    }, []);

    return (
        <contextCitas.Provider
        value={{
          citas,
          selectdBarberos,
          crearCita,
          obtenerCitas,
          eliminarCitas,
          selectBarbero,
          resetCitas  
        }}
        >
            {children}
        </contextCitas.Provider>
    );
};

export default CitasState;