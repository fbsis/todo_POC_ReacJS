import {
    Container, makeStyles
} from '@material-ui/core';

import Field from "Components/Field";
import Button from "Components/Button";

const useStyles = makeStyles((theme) => ({
    register: {
        margin: theme.spacing(2, 0, 1),
    },
    field: {
        fontSize: 10
    },
}));

export default function FormTask() {

    return (
        <Container  >
            <form >
                <Field
                    label={"Name"}
                    name={"Name"}
                    size={"small"}
                />
                <Button
                    type={"submit"}
                    size={"small"}
                >
                    Add new task
                    </Button>
            </form>
        </Container>
    );
}