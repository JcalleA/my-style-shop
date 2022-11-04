import React, { useState } from "react";
import { ContainerLogin, ContainerCabecera, TitleLogin, ButtonAdmin } from "./login-styles";
import { FormLogin } from './FormLogin';



const Login = () => {
    const [isUser, setIsUser] = useState(false);

    return (
        <>
        <ContainerLogin>
            <ContainerCabecera>
                <TitleLogin>{ isUser ? "Login User" : "Login"} Login</TitleLogin>
                <ButtonAdmin onclick={() => setIsUser(!isUser)} bgr >
                    {isUser ? "desactivar modo usuario": "activar modo empleado"}
                </ButtonAdmin>
            </ContainerCabecera>

            <FormLogin isUser={isUser}/>
        </ContainerLogin>
        </>
    );
};

export default Login;