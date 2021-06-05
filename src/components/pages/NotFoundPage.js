import React from "react";

import {
    Container,
    Grid,
    Button
} from "@material-ui/core";

export default function NotFoundPage(props) {
    return (
        <Container>
            <Grid item xs={12}>
                <h1>Страница не найдена</h1>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.match.history.goBack()}
                >Вернуться назад</Button>
            </Grid>
        </Container>
    );
}