import React, { useState, } from 'react';

import {
    makeStyles
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router'

import Field from "Components/Field";
import Button from "Components/Button";
import { register as registerForm } from "../Services/Register";
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Form() {
    const classes = useStyles();
    const history = useHistory();

    const [message, setMessage] = useState("");


    const {
        register,
        handleSubmit: handleSubmitLib,
        errors
    } = useForm({});

    const handlerSubmit = async (data) => {
        try {
            const register = await registerForm(data.email, data.password);
            if (register === 'Error') {
                setMessage("error on create, this email is already in use");
            } else {
                history.push("/login");
            }

        } catch (error) {}
    }

    return (
        <form className={classes.form} onSubmit={handleSubmitLib(handlerSubmit)}>
            {message && (
                <Alert severity="error">{message}</Alert>
            )}
            <Field
                errors={errors}
                label={"email"}
                name={"email"}
                ref={register({ required: true })}
            />
            <Field
                errors={errors}
                label={"Password"}
                name={"password"}
                type={"password"}
                ref={register({ required: true })}
            />

            <Button type={"submit"}>
                Sign On
                </Button>
        </form>
    );
}
