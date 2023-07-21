import {useContext, useEffect} from "react"
import { AuthContext } from "./AuthContext"
import { signOut } from "./auth.js";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        signOut(user);
        window.location.reload();
        navigate('/login');
    }, [user, navigate]);

    return (<></>)
}