
import {
    Typography
} from '@material-ui/core';


import List from "./List";

export default function TodoContainer() {


    return (
        <div>
            <Typography component="h1" variant="h5" align={"center"} >
                Projects
            </Typography>

            <List />
        </div>
    );
}
