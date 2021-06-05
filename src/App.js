import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/pages/HomePage";
import SettingsPage from "./components/pages/SettingsPage";
import TodoPage from "./components/pages/TodoPage";
import TaskPage from "./components/pages/TaskPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: 74
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <Navigation/>
            <main className={classes.root}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/settings" component={SettingsPage}/>
                    <Route exact path="/todo" component={TodoPage}/>
                    <Route path="/todo/task/:id(\d+)" component={TaskPage}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </main>
        </div>
    );
}
