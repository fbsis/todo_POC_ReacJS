import {
    makeStyles
} from '@material-ui/core';
import { useForm } from 'react-hook-form';

import Field from "Components/Field";
import Button from "Components/Button";
import { login } from "./../Services/Login";

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


    const {
        register,
        handleSubmit: handleSubmitLib,
        errors,
    } = useForm({});

    const handlerSubmit = async (data) => {

        try {
            const token = await login(data.email, data.password);
            console.log("token", token);

        } catch (error) {
            console.log("token", error);

        }
    }

    return (
        <form className={classes.form} onSubmit={handleSubmitLib(handlerSubmit)}>
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
                Sign In
                </Button>
        </form>
    );
}
