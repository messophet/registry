import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CallMade from "@mui/icons-material/CallMade"
import Button from "@mui/material/Button";
import { ButtonGroup } from '@mui/material';
import East from "@mui/icons-material/East"
import Close from "@mui/icons-material/Close"
import Check from "@mui/icons-material/Check"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React, { useState } from "react";

const Registration = ({ step, setStep }) => {
    const [adultYesFlag, setAdultYesFlag] = useState(false);
    const [adultNoFlag, setAdultNoFlag] = useState(false);
    const [residentYesFlag, setResidentYesFlag] = useState(false);
    const [residentNoFlag, setResidentNoFlag] = useState(false);
    const [conditionYesFlag, setConditionYesFlag] = useState(false);
    const [conditionNoFlag, setConditionNoFlag] = useState(false);

    return (
        <Paper
            variant="outlined"
            sx={() => ({
                overflow: 'hidden',
                width: '100%',
                boxShadow: '0px 4px 20px rgba(61, 71, 82, 0.25)',
                bgcolor: '#fff',
                marginTop: '2em',
            })}
        >
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    borderBottom: '1px solid',
                    borderColor: 'grey.100',
                    margin: '1em 1em 1em 2em'
                })}
            >
                <Typography fontWeight={300} fontSize={'28px'}>
                    Please fill out the brief screener below to determine whether you are eligible to submit a Patient Registry application.
                </Typography>
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    margin: '1em 1em 1em 2em',
                })}
            >
                <Typography fontWeight={50} fontSize={'14px'} color='grey'>1/3</Typography>
                <Typography fontWeight={300} fontSize={'28px'} marginBottom={'1em'}>
                    Are you currently a legal adult (at least 18 years old and the age of majority in your state)?
                </Typography>
                <Button
                    variant="primary"
                    onClick={() => {
                        setAdultYesFlag(true);
                        setAdultNoFlag(false);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: adultYesFlag ? 'black' : 'white',
                    }}>
                    <Typography sx={{display: "flex", alignItems: "center"}}
                                color={ adultYesFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>Yes</Typography>
                        {adultYesFlag ? <Check fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        setAdultYesFlag(false);
                        setAdultNoFlag(true);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: adultNoFlag ? 'black' : 'white',
                        marginLeft: '1em'}}>
                    <Typography sx={{display: "flex", alignItems: "center"}} color={ adultNoFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>No</Typography>
                        {adultNoFlag ? <Close fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                { adultNoFlag ?
                    <Typography display={'inline'} marginLeft={'1em'} color={'red'}>We're sorry, but you must be over 18 to be eligible for the patient registry.</Typography>
                    : null}
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    margin: '1em 1em 1em 2em',
                })}
            >
                <Typography fontWeight={50} fontSize={'14px'} color='grey'>2/3</Typography>
                <Typography fontWeight={300} fontSize={'28px'} marginBottom={'1em'}>
                    Are you a U.S. citizen or permanent resident?
                </Typography>
                <Button
                    variant="primary"
                    onClick={() => {
                        setResidentYesFlag(true);
                        setResidentNoFlag(false);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: residentYesFlag ? 'black' : 'white',
                    }}>
                    <Typography sx={{display: "flex", alignItems: "center"}}
                                color={ residentYesFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>Yes</Typography>
                        {residentYesFlag ? <Check fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        setResidentYesFlag(false);
                        setResidentNoFlag(true);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: residentNoFlag ? 'black' : 'white',
                        marginLeft: '1em' }}>
                    <Typography sx={{display: "flex", alignItems: "center"}} color={ residentNoFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>No</Typography>
                        {residentNoFlag ? <Close fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                { residentNoFlag ?
                    <Typography display={'inline'} marginLeft={'1em'} color={'red'}>We're sorry, but you must be a U.S Citizen or permanent resident to be eligible for the patient registry.</Typography>
                    : null}
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    margin: '1em 1em 1em 2em',
                })}
            >
                <Typography fontWeight={50} fontSize={'14px'} color='grey'>3/3</Typography>
                <Typography fontWeight={300} fontSize={'28px'} marginBottom={'1em'}>
                    Do you have any of the following conditions: quadriplegia, paraplegia, visual impairment or blindness, aphasia or the inability to speak, or hearing impairment or deafness?
                </Typography>
                <Button
                    variant="primary"
                    onClick={() => {
                        setConditionYesFlag(true);
                        setConditionNoFlag(false);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: conditionYesFlag ? 'black' : 'white',
                    }}>
                    <Typography sx={{display: "flex", alignItems: "center"}}
                                color={ conditionYesFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>Yes</Typography>
                        {conditionYesFlag ? <Check fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        setConditionYesFlag(false);
                        setConditionNoFlag(true);
                    }}
                    sx={ {
                        border: '1px solid black',
                        borderRadius: 28,
                        backgroundColor: conditionNoFlag ? 'black' : 'white',
                        marginLeft: '1em' }}>
                    <Typography sx={{display: "flex", alignItems: "center"}} color={ conditionNoFlag ? 'white' : 'black' }>
                        <Typography minWidth={'3em'}>No</Typography>
                        {conditionNoFlag ? <Close fontSize={'inherit'}/> : <RadioButtonUncheckedIcon fontSize={'inherit'}/>}
                    </Typography>
                </Button>
                { conditionNoFlag ?
                    <Typography display={'inline'} marginLeft={'1em'} color={'red'}>We're sorry, but we're only accepting applications from individuals with qualifying conditions at this time.</Typography>
                    : null}
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'right',
                    py: 1,
                    position: 'relative',
                    margin: '1em 1em 1em 2em',
                })}
            >
                <Typography fontWeight={400} fontSize={'18px'}>
                    <Button variant="text"
                            onClick={() => setStep(step+1)}
                            sx={{ color: 'black', textDecoration: 'underline' }}
                            disabled={!conditionYesFlag || !adultYesFlag || !residentYesFlag}
                    >
                        Next Questions <East/>
                    </Button>
                </Typography>
            </Box>
        </Paper>
    )
};

export default Registration;