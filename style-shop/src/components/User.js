import React, { useEffect, useState, useParams } from "react";
import '../App.css'
import axios from "axios";

const User = () => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const { id } = useParams();
    const getToken = localStorage.getItem("token");
    useEffect(() => {
        setToken(getToken);
    });


    useEffect(() => {
        if (token) {
            axios
                .get(`http://localhost:3001/user/${id}`)
                .then(res => res.json)
                .then(res => setUser(res))
                .then(res => console.log(res))
                .catch((error) => console.error(error));
        }
    }, [token]);


    return (
        user

    )

};
export default User;