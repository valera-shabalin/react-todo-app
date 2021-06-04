import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    AppBar, Drawer, List, ListItem, ListItemText,
    Divider, Toolbar, Typography, IconButton, ListItemIcon
} from "@material-ui/core";

import {
    Menu, ChevronLeft, ChevronRight,
    List as ListIcon,
    Settings, Person, ExitToApp
} from "@material-ui/icons";

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    drawer: {
        width: 260,
        flexShrink: 0
    },
    drawerPaper: {
        width: 260
    }
}));

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const classes = useStyles();

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <Menu />
                    </IconButton>
                        <Link exect to="/">
                            <Typography variant="h6" >
                                Ежедневник
                            </Typography>
                        </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                open={open}
                className={classes.drawer}
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/todo">
                        <ListItem button>
                            <ListItemIcon>
                                <ListIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Список дел"/>
                        </ListItem>
                    </Link>
                    <Link to="/settings">
                        <ListItem button>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Настройки"/>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link exect to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Профиль"/>
                        </ListItem>
                    </Link>
                    <Link to="/logout">
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToApp/>
                            </ListItemIcon>
                            <ListItemText primary="Выйти"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
}