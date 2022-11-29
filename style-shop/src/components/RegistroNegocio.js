import React from 'react';
import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import './components.css'

const RegistroNegocio = props => {
    const [form, setForm] = useState({
        nombre: "",
        ciudad: "",
        telefono: "",
        
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
            .post("https://backstyleshop.herokuapp.com/api/users/registrarnegocio", form)
            .then(({ data }) => console.log(data));

    };

    return (
        <Container className='form-container'>
            <h1 className='h1'>Registrate completando todos los campos</h1>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label' >Nombre Negocio</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="text"
                        name="nombre"
                        placeholder="Nombre del negocio"
                        value={form.nombre}
                        onChange={onUpdateField}
                    />
                </Form.Group>
                <Form.Group className='form-imput'>
                    <Form.Label className='form-label'  >Ciudad</Form.Label>
                    <Form.Control
                        className='form-control'
                        type="text"
                        name="apellido"
                        placeholder="Escriba Su Apellido"
                        value={form.ciudad}
                        onChange={onUpdateField}
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
                <h1 className='h1'> Fecha: {date.toDateString()}</h1>
                <Button className='form-button' type="submit" variant='dark'>
                    Registrar
                </Button>
            </Form>
        </Container>
    );
};

export default RegistroNegocio;