import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ifError } from 'assert';
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
            .post("http://localhost:3001/login", form)
            .then((res) => {
                const { data } = res;
                setMensaje(data.mensaje);
                if(data.mensaje==="Usuario logeado correctamente"){
                    setTimeout(() => {
                        localStorage.setItem("token", data.usuario.token);
                        setMensaje("");
                        navigate(`/user/${data.usuario.id}`);
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
        <form onSubmit={onSubmitForm}>
            <div >
                <label >Email</label>
                <input
                    type="text"
                    aria-label="Email field"
                    name="correo"
                    value={form.correo}
                    onChange={onUpdateField}
                    placeholder="correo"
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
                    placeholder="password"
                />
            </div>
            <div >
                <button type="submit">
                    {loading ? "Cargando..." : "Iniciar Sesión"}
                </button>
            </div>
            <p>
                Aun no tienes cuenta?{" "}
                
                <Link to="/registro">
                    <button>
                        Registrarse
                    </button>
                </Link>
                
                
            </p>
            {mensaje && <div>{mensaje}</div>}
        </form>

    );
};

export default Login;