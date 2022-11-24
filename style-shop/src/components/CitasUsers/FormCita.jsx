import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import contextCitas from "../../contexts/contextCitas/ContextCitas";
import contextUsers from "../../contexts/contextUsers/contextUsers";
import { formatearFecha } from "../../helpers/formatearFecha";
import { Button, ContainerInput } from "../../styles/utilStyles";
import { MessageError } from "../../components/Registro/styles";
import { ContainerFormCitas } from "./styles";
import { validateCita } from "../../helpers/validarFormulario";

import Spinner from "../Spinner/Spinner";
import SpinnerSmall from "../Spinner/SpinnerSmall";


const initialForm = {
    barbero: "",
    fecha: formatearFecha(),
    hora: new Date().toLocaleTimeString().substring(0, 5),
    observaciones: "",
};
const FormCita = ({ defaultValues }) => {
    const {
        reset,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: initialForm,
    });

    const { id } = useParams();
    const navigation = useNavigate();

    const [loading, setLoading] = useState(false);
    const [citaLoading, setCitaLoading] = useState(false);

    const { barberos, getBarberos } = useContext(contextUsers);
    const { crearCita, editCita, barberSelected, selectBarbero } = 
     useContext(contextCitas);

    const fecha = useRef({});
    const hora = useRef({});

    fecha.current = watch("fecha", "");
    hora.current = watch("hora", "");

    useEffect(() => {
        if (id) {
            reset(defaultValues);
        } else if (barberSelected) {
            reset({barbero: barberSelected });
        } else {
            reset(barberSelected);
        }
    }, [id]);

    useEffect(() => {
        const getBarberosEffect = async () => {
            if (!barberos) {
                setLoading(true);
                await getBarberos();
                setLoading(false);
            }
        };
        getBarberosEffect();
        return () => {
            setLoading(false);
            if (barberSelected) {
                selectBarbero(null);
            }
        };
    }, []);

    const mySubmit = async (data) => {
        const cita = {
            barbero: data.barbero,
            fecha: data.fecha + " " + data.hora,
            observaciones: data.observaciones,
        };
        if (id) {
            setCitaLoading(true);
            await editCita(id, cita);
            setCitaLoading(false);
            reset(initialForm);
            navigation("/newCita");
        } else {
            setCitaLoading(true);
            await crearCita(cita);
            setCitaLoading(false);
            reset(initialForm);
        }
    };
    if (loading) return <Spinner/>;
    return (
        <ContainerFormCitas>
            <h2>{id ? "Edita tu cita" : "Agenda tu cita"}</h2>
            <form onSubmit={handleSubmit(mySubmit)}>
                <ContainerInput>
                    <label htmlFor="barbero">Barbero</label>
                    <input
                        name="barbero"
                        id="barbero"
                        type="text"
                        list="dl-barberos"
                        placeholder="seleccione un barbero..."
                        {...register("barbero", validateCita.barbero)}
                    />
                    <datalist id="dl-barberos">
                        {barberos.map((option) => (
                        <option value={option._id} key={option._id}>
                            {option.nombre}
                        </option>
                        ))}
                    </datalist>
                </ContainerInput>
                {errors.barbero && (
                    <MessageError>{errors.barbero.message}</MessageError>
                )}

                <ContainerInput>
                    <label htmlFor="fecha">Fecha</label>
                    <input
                        id="fecha"
                        name="fecha"
                        type="date"
                        min={formatearFecha()}
                        {...register("fecha", {
                        validate: (value) => {
                            if (
                                new Date(value).toUTCString().substring(0, 3) === "Sat" ||
                                new Date(value).toUTCString().substring(0, 3) === "Sun"
                            ) {
                            return "Los sabados y domingos no se atiende";
                            }
                            return true;
                        },
                        })}
                    />
                </ContainerInput>
                {errors.fecha && <MessageError>{errors.fecha.message}</MessageError>}

                <ContainerInput>
                    <label htmlFor="hora">Hora</label>
                    <input
                        type="time"
                        name="hora"
                        id="hora"
                        min="08:00"
                        max="18:00"
                        step={60}
                        {...register("hora", {
                        validate: (value) => {
                            if (fecha.current === formatearFecha()) {
                            const actualvalueNumber = Number(
                                new Date().toLocaleTimeString().split(":")[0]
                            );
                            const numValue = Number(value.split(":")[0]);
                            if (numValue > actualvalueNumber) return true;
                            return "A esta hora no se le podrá atender";
                            }
                        },
                        })}
                    />
                </ContainerInput>
                {errors.hora && <MessageError>{errors.hora.message}</MessageError>}

                <ContainerInput>
                <label htmlFor="observaciones">Observaciones</label>
                <textarea
                    name="observaciones"
                    id="observaciones"
                    rows="4"
                    {...register("observaciones", validateCita.observaciones)}
                ></textarea>
                </ContainerInput>
                {errors.observaciones && (
                <MessageError>{errors.observaciones.message}</MessageError>
                )}

                <Button disabled={citaLoading}>
                {citaLoading && <SpinnerSmall />}
                {id ? "editar" : "enviar"}
                </Button>
            </form>
        </ContainerFormCitas>
    );
};

export default FormCita;