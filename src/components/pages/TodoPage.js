import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Grid,
    Paper,
    Checkbox,
    makeStyles
} from "@material-ui/core";

const useStyle = makeStyles({
    title: {
        marginBottom: 25
    },
    item: {
        padding: 20
    }
});

export default function TodoPage() {
    const [todos, setTodos] = useState([
        {
            title: "Дело",
            id: 1
        },
        {
            title: "Дело 2",
            id: 2
        },
        {
            title: "Дело 3",
            id: 3
        },
        {
            title: "Дело 4",
            id: 4
        }
    ]);
    const classes = useStyle();

    useEffect(async () => {
       try {
           const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task");
           const result = await response.json();

       } catch (err) {
           console.log(err)
       }

       return () => {

       }
    });

    return (
        <Container>
            <Grid
                container
                direction="column"
            >
                <Grid item className={classes.title}>
                    <h1>Списки дел</h1>
                </Grid>
                <Grid
                    container
                    direction="column"
                    spacing={2}
                >
                    {
                        todos.map(item => {
                            return (
                                <Grid item key={item.id}>
                                    <Paper
                                        variant="outlined"
                                        square
                                        className={classes.item}
                                    >
                                        <Checkbox color="primary"/>
                                        <Link to={`/todo/task/${item.id}`}>{item.title}</Link>
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
        </Container>
    );
}