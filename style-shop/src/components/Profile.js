import React from "react";
import { useAuth0,} from "@auth0/auth0-react";
import '../App.css'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading...</div>;
    }

    return (
    isAuthenticated && (
        <div>
            <h1>Bienvenido</h1>
            <img className="img-profile" src={user.picture} alt={user.name} />
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
        
    )
);
};
export default Profile;