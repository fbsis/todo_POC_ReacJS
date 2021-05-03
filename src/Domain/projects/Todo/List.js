/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getAll } from "./../Services/Projects";

import {
    makeStyles,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@material-ui/core';

import Form from "./Form";
import FormTask from "./FormTask";

const useStyles = makeStyles((theme) => ({
    register: {
        margin: theme.spacing(2, 0, 1),
    },
    table: {
        minWidth: 650,
    },
    textTitle: {
        margin: theme.spacing(0, 2, 0),
        fontSize: "16px"
    },
    formTask: {
        margin: theme.spacing(0, 0, 3),
    }
}));

export default function List() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [projects, setProjects] = useState([]);


    const getAllProjects = async () => {
        let projectsGetAll = await getAll();
        setProjects(projectsGetAll.data);
    }

    useEffect(() => {
        getAllProjects();
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const listRowTodo = (tasks) => {
        if (tasks.length === 0)
            return <TableRow >
                <TableCell align="center" colSpan={5}>
                    No item on todo
            </TableCell>
            </TableRow>

        return tasks.filter(e => e.status = "todo").map((row) => (
            <TableRow key={row.name}>
                <TableCell align="left" minWidth={"90%"}>
                    <Checkbox
                        //checked={checked}
                        //onChange={handleChange}
                        size="small"
                    /> {row.name}
                </TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
            </TableRow>
        ))
    }

    const listRowDone = (tasks) => {
        if (tasks.length === 0)
            return <TableRow >
                <TableCell align="center" colSpan={5}>
                    No item on done
            </TableCell>
            </TableRow>

        return tasks.filter(e => e.status = "done").map((row) => (
            <TableRow key={row.name}>
                <TableCell align="left" minWidth={"90%"}>
                    <Checkbox
                        //checked={checked}
                        //onChange={handleChange}
                        size="small"
                    /> {row.name}
                </TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
                <TableCell >20/20/2010 00:00:00</TableCell>
            </TableRow>
        ))
    }

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Create new project</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Form />
                </AccordionDetails>
            </Accordion>

            {projects.map((project) => (
                <Accordion expanded={expanded === project._id} onChange={handleChange(project._id)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{project.name}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">Description</TableCell>
                                        <TableCell >Date of Creation</TableCell>
                                        <TableCell >Date of Creation</TableCell>
                                        <TableCell ></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <Typography component="h6" variant="h6" align={"left"} className={classes.textTitle}>
                                        Todo
                                    </Typography>
                                    {listRowTodo(project.tasks)}

                                    <Typography component="h2" variant="h6" align={"left"} className={classes.textTitle}>
                                        Done
                                    </Typography>
                                    {listRowDone(project.tasks)}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </AccordionDetails>
                    <div className={classes.formTask}>
                        <FormTask />
                    </div>
                </Accordion>
            ))}








        </div>
    );
}