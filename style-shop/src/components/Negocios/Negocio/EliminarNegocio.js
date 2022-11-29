import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const EliminarNegocio= (email)=>{

    
        const form = {
            correo: email
        }
        console.log(email);
        console.log(form);
        axios
            .delete("https://backstyleshop.herokuapp.com/api/negocio/remove", form)
            .then((res) => {
                const { data } = res;
                Swal.fire(data.mensaje,form.correo)
            })
            .catch((error) => {
                Swal.fire(error)
            });
    }


export default  EliminarNegocio;