import React from "react";
import FormCita from "./FormCita";
import NuevaCita from "./NuevaCita";
import { ContainerCitasUsers } from "./styles";

const CitasUsers = () => {
    return (
        <ContainerCitasUsers>
            <NuevaCita/>
        </ContainerCitasUsers>
    );
};

export default CitasUsers;