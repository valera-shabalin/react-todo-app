import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyle = makeStyles({
   logo: {
       color: "#fff"
   }
});

function NavigationAppBar({ handleDrawer }) {
    const classes = useStyle();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
                    <Menu/>
                </IconButton>
                <Link to="/" className={classes.logo}>
                    <Typography variant="h6">
                        Ежедневник
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

NavigationAppBar.propTypes = {
    handleDrawer: PropTypes.func.isRequired
}

export default NavigationAppBar;