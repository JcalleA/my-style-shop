import React, { Suspense, useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

import contextAuth from "../contexts/contextAuth/ContextAuth";


const CitasUsers = React.lazy(() => 
    import("../components/CitasUsers/CitasUsers")
);
const Home = React.lazy(() => import("../routes/home"));

const Login = React.lazy(() => import("../components/Login/Login"));
const register = React.lazy(() => import("../components/Registro/Registro"));

const AppRouter = () => {

    const { token } = useContext(contextAuth);

    if (token === null) {
        return <Spinner/>;
    }

    return (
        <HashRouter>
            <Suspense fallback ={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="/citas" element={<CitasUsers />} />
                    </Route>
                </Routes>
            </Suspense>
        </HashRouter>
    );
};

export default AppRouter;