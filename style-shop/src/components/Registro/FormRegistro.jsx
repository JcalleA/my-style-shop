import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { Button, ContainerInput } from '../../styles/utilStyles';
import { ParrafoAvisoRegister } from '../Login/login-styles';
import { ContainerFormRegister, MessageError } from './styles';
import { Link } from 'react-router-dom';
//import './components.css'
import SpinnerSmall from '../Spinner/SpinnerSmall';

const FormRegistro = props => {

    const date = new Date().toUTCString();
    const [Mensaje, setMensaje] = useState({
        mensaje: "",
    });
    const [form, setForm] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        password: "",
        imagenUrl: "",
        hora: date,
        trabajador: false,
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isUser, setIsUser] = useState(false);
    

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
            .post("https://backstyleshop.herokuapp.com/api/users/registrar", form)
            .then((res) => {
                const { data } = res;
                setMensaje(data)

                if (data.mensaje === "Usuario registrado correctamente") {
                    setTimeout(() => {
                        setMensaje("");
                        navigate('/login');
                    }, 1500);
                }
            })

    };

    return (
        <Container>
            <ContainerFormRegister>
                <form onSubmit={onSubmitForm}>
                    <ContainerInput>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            placeholder="Ingrese su nombre..."
                            autoComplete="given-name"
                            value={form.nombre}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="apellidos">Apellidos</label>
                        <input
                            id="apellidos"
                            type="text"
                            name="apellidos"
                            placeholder="Ingrese sus apellidos..."
                            autoComplete="given-name"
                            value={form.apellidos}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor='correo'>Correo</label>
                        <input
                            id="correo"
                            type="email"
                            name="correo"
                            autoComplete="email"
                            value={form.correo}
                            onChange={onUpdateField}
                            required />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="telefono">Telefono</label>
                        <input
                            id="telefono"
                            type="number"
                            name="telefono"
                            placeholder="Ingrese su telefono..."
                            value={form.telefono}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Ingrese su contraseña..."
                            value={form.password}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <label htmlFor="imagenUrl">Imagen</label>
                        <input
                            id="imagenUrl"
                            name="imagenUrl"
                            type="text"
                            placeholder=" ingrese enlace de imagen..."
                            value={form.imagenUrl}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>
                    <Button disabled={loading} type="submit">
                        {loading && <SpinnerSmall />}{" "}
                        {isUser ? "Registrar usuario" : "Registrar"}
                    </Button>
                    <ParrafoAvisoRegister>
                        Ya tienes cuenta😁? <Link to="/login">Ingresa aquí!</Link>
                        <h1>{Mensaje.mensaje}</h1>
                    </ParrafoAvisoRegister>
                </form>
            </ContainerFormRegister>
        </Container>
    );
};

export default FormRegistro;
