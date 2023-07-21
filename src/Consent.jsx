import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CallMade from "@mui/icons-material/CallMade"
import { TextField, FormControl, Button } from "@mui/material";
import East from "@mui/icons-material/East.js";
import React from "react";

const Consent = ({ step, setStep }) => {
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
                    margin: '1em 1em 1em 1em'
                })}
            >
                <Typography fontWeight={900} fontSize={'32px'}>
                    Authorization to Release My Medical, Psychiatric, and Medication Records
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
                <Typography fontWeight={400} fontSize={'18px'}>
                    Sign below to authorize *
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
                <FormControl>
                    <Box>
                        <TextField type="text" color='primary' label="First Name of Participant *" sx={{ minWidth: '15em'}} InputLabelProps={{ shrink: true }} />
                        <TextField type="text" color='primary' label="Last Name of Participant *" sx={{ minWidth: '15em', marginLeft: '2em' }}  InputLabelProps={{ shrink: true }} />
                    </Box>
                    <Box sx={{ marginTop: '2em' }}>
                        <TextField type="text" color='primary' label="Participant Phone Number *" sx={{ minWidth: '15em'}} InputLabelProps={{ shrink: true }} />
                        <TextField type="date" color='primary' label="Participant Date Of Birth *" sx={{ minWidth: '15em', marginLeft: '2em' }} InputLabelProps={{ shrink: true }} />
                    </Box>
                </FormControl>
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    borderBottom: '1px solid',
                    borderColor: 'grey.100',
                    margin: '1em 1em 1em 1em'
                })}
            >
                <Typography fontWeight={900} fontSize={'32px'}>
                    Primary Care Provider Contact Information
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
                <Typography fontWeight={400} fontSize={'18px'}>
                    I authorize the health care provider listed below to release my full medical record (including medication records) to. *
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
                <FormControl>
                    <Box>
                        <TextField type="text" color='primary' label="Full Name of Provider *" sx={{ minWidth: '15em'}} InputLabelProps={{ shrink: true }} />
                        <TextField type="text" color='primary' label="Phone Number *" sx={{ minWidth: '15em', marginLeft: '2em' }}  InputLabelProps={{ shrink: true }} />
                    </Box>
                    <Box sx={{ marginTop: '2em' }}>
                        <TextField type="text" color='primary' label="Street Address *" sx={{ minWidth: '15em'}} InputLabelProps={{ shrink: true }} />
                        <TextField type="text" color='primary' label="City*" sx={{ minWidth: '15em', marginLeft: '2em' }} InputLabelProps={{ shrink: true }} />
                    </Box>
                    <Box sx={{ marginTop: '2em' }}>
                        <TextField type="text" color='primary' label="State *" sx={{ minWidth: '15em'}} InputLabelProps={{ shrink: true }} />
                        <TextField type="text" color='primary' label="Zip Code *" sx={{ minWidth: '15em', marginLeft: '2em' }} InputLabelProps={{ shrink: true }} />
                    </Box>
                </FormControl>
            </Box>
            <Box
                sx={() => ({
                    textAlign: 'left',
                    py: 1,
                    position: 'relative',
                    borderBottom: '1px solid',
                    borderColor: 'grey.100',
                    margin: '1em 1em 1em 1em'
                })}
            >
                <Typography fontWeight={900} fontSize={'32px'}>
                    Electronic Signature
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
                <FormControl>
                    <TextField type="text" color='primary' label="Participant Signature (Enter your legal name) *" sx={{ minWidth: '20em'}} InputLabelProps={{ shrink: true }} />
                    <TextField type="text" color='primary' label="First and Last Name of Participant *" sx={{ minWidth: '20em', marginTop: '2em' }}  InputLabelProps={{ shrink: true }} />
                </FormControl>
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
                            disabled={false}
                    >
                        Submit <East/>
                    </Button>
                </Typography>
            </Box>
        </Paper>
    )
};

export default Consent;