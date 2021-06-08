import {Button, Container, FormGroup, Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import {LockOpen} from "@material-ui/icons";
import {Link} from "react-router-dom";
import React from "react";

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

export default function RegisterPage() {
    const classes = useStyle();

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
                                    <h1 className={classes.title}>Регистрация</h1>
                                </Grid>
                                <Grid item>
                                    <FormGroup>
                                        <TextField
                                            label="Электронная почта"
                                            variant="outlined"
                                        />
                                        <TextField
                                            label="Имя"
                                            variant="outlined"
                                        />
                                        <TextField
                                            label="Придумайте пароль"
                                            variant="outlined"
                                        />
                                        <TextField
                                            label="Повторите пароль"
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
                                            Зарегистрироваться
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/login">
                                            Уже есть аккаунт? Войдите!
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