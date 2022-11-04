import React from 'react';
import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import './components.css'

const Registros = props => {
    const [Mensaje, setMensaje] = useState({
        mensaje:"",
    });
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        password: "",
        imagenUrl: "",
        hora: date,
        trabajador:false,
    });
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
        <Container className='form-container'>
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
        </Container>
    );
};

export default Registros;
