import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Grid,
    Paper,
    FormGroup,
    TextField,
    Button,
    makeStyles
} from "@material-ui/core";

import { LockOpen } from "@material-ui/icons";

const useStyle = makeStyles({
    root: {
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    form: {
        padding: 35,
        maxWidth: 600,
        '& .MuiTextField-root': {
            marginBottom: 12,
            width: 400
        }
    },
    title: {
        marginBottom: 25
    }
});

export default function LoginPage() {
    const classes = useStyle();

    useEffect(() => {


        return () => {

        }
    })

    function handlerSubmit(e) {
        alert('h1');
        e.preventDefault();
    }

    return (
        <div className={classes.root}>
            <Container>
                <Grid container justify="center">
                    <Paper variant="outlined">
                        <form className={classes.form} onSubmit={handlerSubmit}>
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <h1 className={classes.title}>Авторизация</h1>
                                </Grid>
                                <Grid item>
                                    <FormGroup>
                                        <TextField
                                            label="Электронная почта"
                                            variant="outlined"
                                        />
                                        <TextField
                                            label="Пароль"
                                            variant="outlined"
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Grid item>
                                        <Button
                                            startIcon={<LockOpen/>}
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                            onClick={handlerSubmit}
                                        >
                                            Войти
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/register">
                                            Нет аккаунта? Зарегистрируйтесь!
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}