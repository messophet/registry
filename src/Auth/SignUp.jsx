import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {TextField, Button, Paper, Box, Typography, FormControlLabel, Checkbox, Tooltip, Alert} from '@mui/material';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useNavigate } from "react-router-dom";
import { signUp } from './auth'; // Make sure to point to correct path

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    fullName: Yup.string().required('Full name is required'),
    address: Yup.string().required('Address is required'),
    isLAR: Yup.boolean(),
});

const SignUp = () => {
    const navigate = useNavigate();

    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(null);

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
                fullName: '',
                address: '',
                isLAR: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
                // handle form submission
                signUp(values.email, values.password, `+${values.phoneNumber}`, values.fullName, values.address, values.isLAR).then(() => {
                    setError(null);
                    setSuccess(true);
                    setTimeout(() => {
                        navigate('/confirm')
                    }, 4000);
                }).catch((err) => {
                    setSubmitting(false);
                    setError(err.message);
                });
            }}
        >
            {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  touched,
                  values,
              }) => (
                <Paper elevation={3} style={{padding: '2em'}}>
                    <Form onSubmit={handleSubmit}>
                        <Typography variant="h4" style={{marginBottom: '1em'}}>
                            Sign Up
                        </Typography>
                        <Box margin="1em 0">
                            <Field
                                name="email"
                                type="email"
                                as={TextField}
                                label="Email"
                                fullWidth
                                variant="outlined"
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box margin="1em 0">
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
                        <Box margin="1em 0">
                            <Field
                                name="confirmPassword"
                                type="password"
                                as={TextField}
                                label="Confirm Password"
                                fullWidth
                                variant="outlined"
                                error={touched.confirmPassword && !!errors.confirmPassword}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box margin="1em 0">
                            <Field
                                name="phoneNumber"
                                type="tel"
                                as={TextField}
                                label="Phone Number"
                                fullWidth
                                variant="outlined"
                                error={touched.phoneNumber && !!errors.phoneNumber}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box margin="1em 0">
                            <Field
                                name="fullName"
                                type="text"
                                as={TextField}
                                label="Full Name"
                                fullWidth
                                variant="outlined"
                                error={touched.fullName && !!errors.fullName}
                                helperText={touched.fullName && errors.fullName}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box margin="1em 0">
                            <PlacesAutocomplete
                                value={values.address}
                                onChange={(value) => setFieldValue('address', value)}
                                onSelect={(value) => setFieldValue('address', value)}
                            >
                                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                    <div>
                                        <Field
                                            {...getInputProps({
                                                name: 'address',
                                                placeholder: 'Search Places ...',
                                                className: 'location-search-input',

                                            })}
                                            label="Address"
                                            name="address"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            variant="outlined"
                                            error={touched.address && !!errors.address}
                                            helperText={touched.address && errors.address}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map((suggestion) => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                                    : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                        key={suggestion.placeId}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </Box>
                        <Box margin="1em 0">
                            <Tooltip
                                title="Check this box if you intend to use this service to sign up patients on their behalf as their Legally Authorized Representative."
                                placement="right"
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.isLAR}
                                            onChange={() => setFieldValue('isLAR', !values.isLAR)}
                                        />
                                    }
                                    label="Legally Authorized Representative (LAR)"
                                />
                            </Tooltip>
                        </Box>
                        <Box margin="1em 0">
                            <Button
                                type={'submit'}
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isSubmitting}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Form>
                    {success && (
                        <Box sx={{display: 'flex',  justifyContent: 'center', alignItems: 'right'}} margin="1em 0">
                            <Alert severity="success">Sign up successful! Redirecting to confirmation page...</Alert>
                        </Box>
                    )}
                    {error && (
                        <Box sx={{display: 'flex',  justifyContent: 'center', alignItems: 'right'}} margin="1em 0">
                            <Alert severity="error">{error}</Alert>
                        </Box>
                    )}
                </Paper>
            )}
        </Formik>
    )
};


export default SignUp;
