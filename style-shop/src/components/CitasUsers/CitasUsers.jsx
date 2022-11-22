import React from "react";
import ListOfCitas from "./ListaDeCitas";
import { ContainerCitasUsers } from "./styles";

const CitasUsers = () => {
    return (
        <ContainerCitasUsers>
            <ListOfCitas />
        </ContainerCitasUsers>
    );
};

export default CitasUsers;