import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Negocio from './Negocio/Negocio';

const Negocios = () => {
    const [negocios, setNegocios] = useState([])
        
    useEffect(() => {
            
            axios
                .get("http://localhost:3001/api/negocio/getnegocios")
                .then((res) => {
                    const { data } = res;
                    setNegocios(data)
                })
                .catch((error) => console.log(error))
                .catch((res) => {
                    const { datos } = res;
                    setNegocios(datos)
                })
        }, []);

    return (
        <div className="row">
            {negocios.map((negocio)=>{
                return <Negocio key={negocio._id} id={negocio._id} nombre={negocio.nombre} imagenUrl={negocio.imagenUrl} ciudad={negocio.ciudad} telefono={negocio.telefono}></Negocio>
            })}
        </div>
    )
}

export default Negocios