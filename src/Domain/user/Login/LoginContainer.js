import {
    Container, Grid, Link, makeStyles
} from '@material-ui/core';

import Form from "./Form";

const useStyles = makeStyles((theme) => ({
    register: {
      margin: theme.spacing(2, 0, 1),
    },
  }));

export default function LoginContainer() {
  const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Form />

            <Grid container justify="flex-end" className={classes.register}>
                <Grid item>
                    <Link href="/register" variant="body2">
                        I want to register
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}