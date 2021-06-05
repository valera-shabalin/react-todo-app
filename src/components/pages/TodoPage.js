import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid } from "@material-ui/core";

export default function TodoPage() {
    return (
        <Container>
            <Grid item xs={12}>
                <h1>Списки дел</h1>
            </Grid>
            <Grid item xs={12}>
                <Link to="/todo/task/1">1</Link>
                <Link to="/todo/task/2">2</Link>
                <Link to="/todo/task/3">3</Link>
                <Link to="/todo/task/4">4</Link>
                <Link to="/todo/task/5">5</Link>
            </Grid>
        </Container>
    );
}