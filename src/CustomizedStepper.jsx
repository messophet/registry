import * as React from 'react';
import {useState} from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import Button from "@mui/material/Button";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Introduction from './Introduction';
import Registration from './Registration.jsx';
import Consent from './Consent';



const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const steps = [
    'Introduction',
    'Registry Screener',
    'Consent',
    // 'Personal Information',
    // 'Health Information',
    // 'Submission',
    // 'Confirmation'
];

function renderSwitch(step, setStep) {
    switch(step) {
        case 0:
            return (<Introduction step={step} setStep={setStep}/>);
        case 1:
            return(<Registration step={step} setStep={setStep}/>);
        case 2:
            return(<Consent step={step} setStep={setStep} />);
        default:
            return (<Introduction step={step} setStep={setStep}/>);
    }
}

export default function CustomizedStepper() {
    const [step, setStep] = useState(0);

    return (
        <Stack sx={{ width: '100%', marginTop: '1em' }} spacing={4}>
            <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                            <Button onClick={() => setStep(index)} sx={{color: 'black'}}>{label}</Button>
                        </StepLabel>
                    </Step>
                ))}

            </Stepper>
            {renderSwitch(step, setStep)}
        </Stack>
    );
}
