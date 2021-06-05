import React from "react";

import {Container, Grid} from "@material-ui/core";

export default function TaskPage(props) {
    return (
        <Container>
            <Grid item xs={12}>
                <h1>Список дел №{props.match.params.id}</h1>
            </Grid>
        </Container>
    );
}