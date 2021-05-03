import {
    Container, Grid, Link, makeStyles, Typography
} from '@material-ui/core';

import Form from "./Form";

const useStyles = makeStyles((theme) => ({
    register: {
        margin: theme.spacing(2, 0, 1),
    },
    text: {
        margin: theme.spacing(2, 0, 0),
    },
}));

export default function LoginContainer() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <Typography component="h1" variant="h5" align={"center"} className={classes.text}>
                Register
            </Typography>

            <Form />
            <Grid container justify="flex-end" className={classes.register}>
                <Grid item>
                    <Link href="/login" variant="body2">
                        I already have a login
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}