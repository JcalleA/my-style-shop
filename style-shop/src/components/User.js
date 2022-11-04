import { useEffect, useState,  } from "react";
import '../App.css'
import axios from "axios";

const User = () => {

    const [user, setUser] = useState(null);
    const Token = localStorage.getItem("token");

    useEffect(() => {
        if (Token) {

            axios
                .get(`http://localhost:3001/user/getuser`, {
                    headers: {
                        'Authorization': `Beaber ${Token}`
                    }
                })
                .then(res => res.json)
                .then(res => setUser(res))
                .then(res => console.log(res))
                .catch((error) => console.error(error));
        }
    }, []);


    return (
        user

    )

};
export default User;