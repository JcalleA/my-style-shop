import React, { useContext, useState } from 'react';
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
import AuthContext from '../../contexts/AuthContext';

const FormRegistroNegocio = props => {

    const { auth } = useContext(AuthContext);

    const [Mensaje, setMensaje] = useState({
        mensaje: "",
    });
    const [form, setForm] = useState({
        nombre: "",
        ciudad: "",
        correo: "",
        telefono: "",
        id: auth.usuario.id,
        imagenUrl:"",
    });
    const navigate = useNavigate();
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
            .post("http://localhost:3001/api/negocio/registrar", form)
            .then((res) => {
                const { data } = res;
                setMensaje(data)

                if (data.mensaje === "Negocio registrado correctamente") {
                    setTimeout(() => {
                        setMensaje("");
                        navigate('/negocio');
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
                        <label htmlFor="ciudad">Ciudad</label>
                        <input
                            id="ciudad"
                            type="text"
                            name="ciudad"
                            placeholder="Ingrese sus ciudad..."
                            value={form.ciudad}
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
                        <label htmlFor="imagenUrl">Imagen</label>
                        <input
                            id="imagenUrl"
                            name="imagenUrl"
                            type="text"
                            placeholder="enlace de imagen del negocio..."
                            value={form.imagenUrl}
                            onChange={onUpdateField}
                        />
                    </ContainerInput>
                    <Button disabled={loading} type="submit">
                        {loading && <SpinnerSmall />}{" "}
                        Registrar
                    </Button>
                    <ParrafoAvisoRegister>
                        <h1>{Mensaje.mensaje}</h1>
                    </ParrafoAvisoRegister>
                </form>
            </ContainerFormRegister>
        </Container>
    );
};

export default FormRegistroNegocio;
