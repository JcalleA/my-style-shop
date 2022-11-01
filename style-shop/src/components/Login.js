import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import './components.css'

const Login = props => {
    const [form, setForm] = useState({
        correo: "",
        password: "",
    });
    const navigate = useNavigate();

    const [mensaje, setMensaje] = useState();
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
                setMensaje(data.mensaje);
                if (data.mensaje === "Usuario logeado correctamente") {
                    setTimeout(() => {
                        localStorage.setItem("token", data.usuario.token);
                        setMensaje("");
                        navigate(`/home`);
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
        <Container className='form-container'>
            <Form onSubmit={onSubmitForm}>
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
                <Button className='form-button' type="submit" variant='dark'>
                    {loading ? "Cargando..." : "Iniciar Sesión"}
                </Button>
                <h1 className='h1'>Aun no tienes cuenta?</h1>
                <Link to="/registro">
                        <Button className='form-button' variant='dark'>
                            Registrarse
                        </Button>
                    </Link>
                {mensaje && <h1 className='h1'>{mensaje}</h1>}
            </Form>
        </Container>

    );
};

export default Login;