import React, { useState } from "react"
import { forgotPassword } from "./auth.js"
import {Link, useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {Alert, Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

export default function ForgotPassword() {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();

    if (success) {
        navigate('/reset-password');
    }

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, {setSubmitting}) => {
                try {
                    await forgotPassword(values.email)
                    setSuccess(true)
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
                        <Typography variant="title" component="h1" gutterBottom paddingBottom={'0.5em'} textAlign={"center"}>Reset Password</Typography>
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
                        <Box margin="1em 0">
                            <Button
                                type={'submit'}
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isSubmitting}
                            >
                                Reset
                            </Button>
                        </Box>
                        <Box margin="1em 0">
                            <Typography variant="subtitle1" paddingTop={'0.5em'} textAlign={"center"}>Or return to <Link to="/login">Log In.</Link></Typography>
                        </Box>
                        {error && (
                            <Box sx={{display: 'flex',  justifyContent: 'center', alignItems: 'right'}} margin="1em 0">
                                <Alert severity="error">{error}</Alert>
                            </Box>
                        )}
                    </Paper>
                </Form>
            )}
            </Formik>
    )
}