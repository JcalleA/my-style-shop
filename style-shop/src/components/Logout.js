import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
    localStorage.removeItem("user")

    return (
        <Navigate to="/" />

    );
};
export default Logout;
