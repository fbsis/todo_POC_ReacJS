import {
    Container, makeStyles
} from '@material-ui/core';

import Field from "Components/Field";
import Button from "Components/Button";
const useStyles = makeStyles((theme) => ({
    register: {
        margin: theme.spacing(2, 0, 1),
    },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <Container  >
            <form >
                <Field
                    label={"Name"}
                    name={"Name"}
                />
                <Button type={"submit"}>
                    Create new project
                    </Button>
            </form>
        </Container>
    );
}