import React, {useState} from "react";
import FormRegistro from "./FormRegistro";
import {
    ButtonAdmin,
    ContainerCabecera,
    ContainerRegister,
    TitleRegister
} from "./styles"
//=>
const Registro = () => {
    const [isUser, setIsUser] = useState(false);
    const [formAdmin, setFormAdmin] = useState(false);

    const handleFormUser = () =>{
        isUser ? setIsUser(false) : setFormAdmin(formAdmin);
    };

    return (
        <ContainerRegister>
            <ContainerCabecera>
                <TitleRegister>
                    {formAdmin ? "Contraseña de admin"
                    : isUser 
                    ? "Registrar usuario"
                    : "Registrarse"}
                </TitleRegister>
                <ButtonAdmin onClick={handleFormUser} bgr>
                    {formAdmin || isUser ? "desactivar modo admin" : "Activar modo admin"}
                </ButtonAdmin>
                
            </ContainerCabecera>
            {formAdmin ? (
                <formAdmin setIsUser={setIsUser} setFormAdmin={setFormAdmin} />
            ) : (
                <FormRegistro isUser={isUser} />
            )}
        </ContainerRegister>
    );
};

export default Registro;