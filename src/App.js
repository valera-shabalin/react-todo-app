import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import TodoPage from "./components/pages/TodoPage";
import TaskPage from "./components/pages/TaskPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        paddingTop: 74,
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box"
    }
});

export default function App() {
    const classes = useStyle();

    return (
        <div className="App">
            <Navigation/>
            <main className={classes.root}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/settings" component={SettingsPage}/>
                    <Route exact path="/todo" component={TodoPage}/>
                    <Route path="/todo/task/:id(\d+)" component={TaskPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </main>
        </div>
    );
}
