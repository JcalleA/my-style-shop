import { useEffect, useState,  } from "react";
import '../App.css'
import axios from "axios";

const User = () => {

    const [user, setUser] = useState(null);
    const Token = localStorage.getItem("token");
    console.log(Token);
    console.log(user);

    useEffect(() => {
        const headers={headers: {
            'Authorization': `Bearer ${Token}`}}
            axios
                .get("http://localhost:3001/api/users/getuser",headers)
                .then((res) => {
                    const { data } = res;
                    setUser(data)
                })
                .catch((error) => console.error(error))
                .catch(localStorage.removeItem("user"))
    }, [Token]);

};
export default User;