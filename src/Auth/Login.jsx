import React, { useState, useContext } from "react"
import {Link } from "react-router-dom"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {Alert, Box, Button, Paper, TextField, Typography} from "@mui/material";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
})
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { user, signIn } = useContext(AuthContext)

    // If the user is logged in, don't show the login form
    if (user) {
        // Redirect to the profile page
        return <Navigate to="/" />
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, {setSubmitting}) => {
                try {
                    await signIn(values.email, values.password)
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
                            padding: '3em'
                        }}>
                            <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
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
                                    name="password"
                                    type="password"
                                    as={TextField}
                                    label="Password"
                                    fullWidth
                                    variant="outlined"
                                    error={touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box margin="1em 0" alignContent={"right"} textAlign={"right"}>
                                <Link to="/forgot-password">Forgot Password</Link>
                            </Box>
                            <Box margin="1em 0">
                                <Button
                                    type={'submit'}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    Login
                                </Button>
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