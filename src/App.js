import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./components/pages/HomePage";

export default function App() {
    return (
        <div className="App">
            <Navigation/>
            <main>
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </div>
    );
}
