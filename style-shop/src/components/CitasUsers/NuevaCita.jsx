import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import contextCitas from "../../contexts/contextCitas/ContextCitas";
import Spinner from "../Spinner/Spinner";
import FormCita from "./FormCita";
import { ContainerNewCitaUsers } from "./styles";
import getCitaFormatFromId from "../../helpers/getCitaFormatFromId";

const NuevaCita = () => {
    const { id } = useParams();
    const { citas, getCitas } = useContext(contextCitas);
    const [objCita, setObjCita] = useState(getCitaFormatFromId)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        if (!citas) {
            setLoading(true);
            getCitas().then((res) => {
                setLoading(false);
            }).catch((error) => console.error(error));
        }
    }, [id]);

    useEffect(() => {
        if (!id) return; 
        const obj = getCitaFormatFromId(id, citas);
        if (!obj) {
            Swal.fire("error", "Id de la cita no valido", "error").then((res) => {
                navigate("/citas");
            });
        } else {
            setObjCita(obj);
        }
    }, [id, citas]);
    
    return(
        <ContainerNewCitaUsers>
            <FormCita defaultValues={objCita}/> 
        </ContainerNewCitaUsers>
    )
}

export default NuevaCita;