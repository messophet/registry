import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import CustomizedStepper from './CustomizedStepper.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <>
            <CustomizedStepper />
        </>
    )
}

export default Home;