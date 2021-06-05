import React from "react";

import { Container, Grid } from "@material-ui/core";

export default function NotFoundPage() {
    return (
        <Container>
            <Grid item xs={12}>
                <h1>Страница не найдена</h1>
            </Grid>
        </Container>
    );
}