import React from 'react';
import { useState } from "react";
import axios from "axios";

const Registro = props => {
    const [form, setForm] = useState({
        nombre:"",
        correo: "",
        password: "",
    });

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
        .post("http://localhost:3001/registrar",form)
        .then(({data})=> console.log(data));

    };

    return (
        <form  onSubmit={onSubmitForm}>
            <div >
                <label >Nombre</label>
                <input
                    
                    type="text"
                    aria-label="Nombre field"
                    name="nombre"
                    value={form.nombre}
                    onChange={onUpdateField}
                />
            </div>
            <div >
                <label >Email</label>
                <input
                    type="text"
                    aria-label="Email field"
                    name="correo"
                    value={form.correo}
                    onChange={onUpdateField}
                />
            </div>
            <div >
                <label >Password</label>
                <input
                    
                    type="password"
                    aria-label="Password field"
                    name="password"
                    value={form.password}
                    onChange={onUpdateField}
                />
            </div>
            <div >
                <button type="submit">
                    Login
                </button>
            </div>
        </form>
    );
};

export default Registro;
