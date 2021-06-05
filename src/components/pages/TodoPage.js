import React from "react";

import {Container, Grid} from "@material-ui/core";

export default function TodoPage() {
    return (
        <Container>
            <Grid item xs={12}>
                <h1>Списки дел</h1>
            </Grid>
        </Container>
    );
}