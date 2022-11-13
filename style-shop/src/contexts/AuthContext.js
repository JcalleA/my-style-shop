import React, { createContext, useState} from "react";

const AuthContext = createContext();


const user =JSON.parse(localStorage.getItem("user"));
const initialAuth =()=>{
    const date=new Date();
    if(user){
    if(user.expires< date.getTime()){
        localStorage.removeItem("user")
        return null
    }else {
        return user
    }
    }return null
} 
const AuthProvider = ({children}) =>{

    const [auth,setAuth]=useState(initialAuth());
    const handleAuth =(e)=>{
            setAuth(user)
    };

    const data ={auth,handleAuth};

    return <AuthContext.Provider value ={data}>{children}</AuthContext.Provider>;
}

export {AuthProvider};
export default AuthContext;