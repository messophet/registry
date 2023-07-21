import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CallMade from "@mui/icons-material/CallMade"
import Button from "@mui/material/Button";

const Introduction = ({ step, setStep }) => {
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
                    Join Patient Registry
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
                    If you're interested in learning whether you may qualify for future clinical trials, consider joining our Patient Registry.
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
                    <Button variant="text" onClick={() => setStep(step+1)}>Start Your Application. <CallMade/></Button>
                </Typography>
            </Box>
        </Paper>
    )
};

export default Introduction;