import React from 'react';
import { useState } from "react";
import axios from "axios";
//import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { Button, ContainerInput } from '../../styles/utilStyles';
import { ParrafoAvisoRegister } from '../Login/login-styles';
import { ContainerFormRegister, MessageError } from './styles';
import { Link } from 'react-router-dom';
//import './components.css'
import SpinnerSmall from '../Spinner/SpinnerSmall';

const FormRegistro = props => {
    const [Mensaje, setMensaje] = useState({
        mensaje:"",
    });
    const [form, setForm] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        password: "",
        imagenUrl: "",
        hora: date,
        trabajador:false,
    });

    const [loading, setLoading] = useState(false);
    const [isUser, setIsUser] = useState(false);
const date = new Date();

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
            .post("http://localhost:3001/users/registrar", form)
            .then(({ data}) => setMensaje(data));

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
                        <label htmlFor="correo">Correo</label>
                        <input
                            id="correo"
                            type="email"
                            name="email"
                            placeholder="Ingrese su correo..."
                            value={form.apellidos}
                            onChange={onUpdateField}
                        />
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
                            type="imagenUrl"
                            autoComplete="imagenUrl"
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
                    </ParrafoAvisoRegister>
                </form>
            </ContainerFormRegister>
        </Container>
        /*<Container className='form-container'>
            <h1 className='h1'>Registrate completando todos los campos</h1>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label'  >Nombre</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="text"
                        name="nombre"
                        placeholder="Escriba Su Nombre"
                        value={form.nombre}
                        onChange={onUpdateField}
                    />
                </Form.Group>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label'  >Apellido</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="text"
                        name="apellido"
                        placeholder="Escriba Su Apellido"
                        value={form.apellido}
                        onChange={onUpdateField}
                    />
                </Form.Group>
                <Form.Group className='form-imput' controlId="formBasicEmail">
                    <Form.Label className='form-label' >Email</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="email"
                        value={form.correo}
                        onChange={onUpdateField}
                        placeholder="Escriba Su Email"
                        name="correo"
                    />
                </Form.Group>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label'  >Telefono</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="number"
                        name="telefono"
                        placeholder="Telefono"
                        value={form.telefono}
                        onChange={onUpdateField}
                    />
                </Form.Group>
                <Form.Group className='form-imput' controlId="formBasicPassword" >
                    <Form.Label className='form-label' >Password</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="password"
                        placeholder="Escriba Una Contraseña"
                        name="password"
                        value={form.password}
                        onChange={onUpdateField}
                    />
                </Form.Group>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label'  >Url Imagen</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="text"
                        value={form.imagenUrl}
                        onChange={onUpdateField}
                        name="imagenUrl"
                        placeholder="Ingrese direccion imagen"
                    />
                </Form.Group>
                <h1>{Mensaje.mensaje}</h1>
                <h1 className='h1'> Fecha: {date.toDateString()}</h1>
                <Button className='form-button' type="submit" variant='dark'>
                    Registrarse
                </Button>
            </Form>
        </Container>*/
    );
};

export default FormRegistro;
