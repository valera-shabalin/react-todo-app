import React from "react";

import {
    Container,
    Grid,
    Button,
    makeStyles
} from "@material-ui/core";

import { History } from "@material-ui/icons";

const useStyle = makeStyles({
    root: {
        height: "100%",
        flexGrow: 1,
        display: "flex",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        marginBottom: 25
    }
});

export default function NotFoundPage(props) {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Container>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Упс! Страница не найдена.</h1>
                </Grid>
                <Grid container xs={12} justify="center">
                    <Grid item>
                        <Button
                            startIcon={<History/>}
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={() => props.history.goBack()}
                        >Вернуться</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}