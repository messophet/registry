import React, { useState } from "react"
import {confirmPassword, forgotPassword} from "./auth.js"
import {Link, useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {Alert, Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('New password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm new password is required'),
    confirmationCode: Yup.string().required('Confirmation code is required'),
});

export default function ResetPassword() {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();

    if (success) {
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    }

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, {setSubmitting}) => {
                try {
                    await confirmPassword(values.email, values.confirmationCode, values.password)
                    setSuccess(true)
                    setError("")
                } catch (err) {
                    setSubmitting(false);
                    setError(err.message)
                }
            }}
        >
            {({
                  values,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  touched,
                  handleSubmit}) => (

                <Form onSubmit={handleSubmit}>
                    <Paper elevation={3} sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '400px',
                        width: '100%',
                        padding: '2em'
                    }}>
                        <Typography variant="title" component="h1" gutterBottom paddingBottom={'0.5em'} textAlign={"center"}>Set Password</Typography>
                        <Box margin="1em 0" alignItems={"center"}>
                            <Field
                                name={"email"}
                                type={"email"}
                                as={TextField}
                                label={"Email"}
                                fullWidth
                                variant={"outlined"}
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                InputLabelProps={{shrink: true}}
                            />
                        </Box>
                        <Box margin="1em 0" alignItems={"center"}>
                            <Field
                                name={"password"}
                                type={"password"}
                                as={TextField}
                                label={"Password"}
                                fullWidth
                                variant={"outlined"}
                                error={touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                InputLabelProps={{shrink: true}}
                            />
                        </Box>
                        <Box margin="1em 0" alignItems={"center"}>
                            <Field
                                name={"confirmPassword"}
                                type={"confirmPassword"}
                                as={TextField}
                                label={"Confirm Password"}
                                fullWidth
                                variant={"outlined"}
                                error={touched.confirmPassword && !!errors.confirmPassword}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                InputLabelProps={{shrink: true}}
                            />
                        </Box>
                        <Box margin="1em 0" alignItems={"center"}>
                            <Field
                                name={"confirmationCode"}
                                type={"confirmationCode"}
                                as={TextField}
                                label={"Confirmation Code"}
                                fullWidth
                                variant={"outlined"}
                                error={touched.confirmationCode && !!errors.confirmationCode}
                                helperText={touched.confirmationCode && errors.confirmationCode}
                                InputLabelProps={{shrink: true}}
                            />
                        </Box>
                        <Box margin="1em 0">
                            <Button
                                type={'submit'}
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isSubmitting}
                            >
                                Confirm
                            </Button>
                        </Box>
                        {error && (
                            <Box sx={{display: 'flex',  justifyContent: 'center', alignItems: 'right'}} margin="1em 0">
                                <Alert severity="error">{error}</Alert>
                            </Box>
                        )}
                        {success && (
                            <Box sx={{display: 'flex',  justifyContent: 'center', alignItems: 'right'}} margin="1em 0">
                                <Alert severity="success">Password reset successful! Redirecting to login page...</Alert>
                            </Box>
                        )}
                    </Paper>
                </Form>
            )}
        </Formik>
    )
}