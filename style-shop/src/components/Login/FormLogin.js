import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../components.css'
import { ContainerFormLogin, ParrafoAvisoRegister, ContainerLogin} from './login-styles.jsx';
import { ContainerInput, Button } from '../../styles/utilStyles';
import SpinnerSmall from '../Spinner/SpinnerSmall';
import Container from 'react-bootstrap/esm/Container';


const FormLogin = props => {
    const [form, setForm] = useState({
        correo: "",
        password: "",
    });
    const navigate = useNavigate();

    const [mensaje, setMensaje] = useState({
        mensaje: "",
    });
    const [loading, setLoading] = useState(false);

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:3001/users/login", form)
            .then((res) => {
                const { data } = res;
                const date= new Date()
                setMensaje(data)
                if (data.mensaje === "Usuario logeado correctamente") {
                    const datos = {
                        usuario: data.usuario,
                        expires: date.getTime()+1200000
                    }
                    setTimeout(() => {
                        localStorage.setItem("user",JSON.stringify(datos));
                        setMensaje("");
                        
                        navigate('/',{ replace: true });
                    }, 1500);
                }
            })
            .catch((error) => {
                console.error(error);
                setMensaje("Correo u contraseña incorrecta");
                setTimeout(() => {
                    setMensaje("");
                }, 1500);
            });
        setForm({ correo: "", password: "", });
        setLoading(false);
    };

    return (
        <ContainerLogin>
            <ContainerFormLogin>
                <form onSubmit={onSubmitForm}>
                    <ContainerInput>
                        <label htmlFor='correo'>Correo</label>
                        <input 
                        id="correo"
                        type="email"
                        name="correo"
                        value={form.correo}
                        onChange={onUpdateField}
                        required />
                    </ContainerInput>
                    <ContainerInput>
                        <label>Contraseña</label>
                        <input 
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onUpdateField}
                        required
                        />
                    </ContainerInput>
                    <Button disabled={loading} type="submit">
                        {loading && <SpinnerSmall /> }{" "}
                        {loading ? "Cargando..." : "Iniciar Sesión"}
                    </Button>
                    <ParrafoAvisoRegister>
                        No tienes cuenta😢? <Link to="/registro">Registrate aquí!</Link>
                        <h1 >{mensaje.mensaje}</h1>
                    </ParrafoAvisoRegister>
                </form>
            </ContainerFormLogin>
        </ContainerLogin>
    );
};

export default FormLogin;