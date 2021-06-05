import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from "@material-ui/core";

import {ChevronLeft, ExitToApp, List as ListIcon, Person, Settings} from "@material-ui/icons";

const useStyle = makeStyles({
    drawer: {
        width: 260,
        flexShrink: 0
    },
    drawerPaper: {
        width: 260
    },
    item: {
        color: "#757575"
    }
});

const menu = [
    {
        text: 'Списки дел',
        link: '/todo',
        icon: ListIcon
    },
    {
        text: 'Профиль',
        link: '/',
        icon: Person
    },
    {
        text: 'Настройки',
        link: '/settings',
        icon: Settings
    },
    {
        text: 'Выйти',
        link: '/login?logout=true',
        icon: ExitToApp
    }
];

function NavigationDrawer({ open, handleDrawer }) {
    const classes = useStyle();

    return (
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
                <IconButton onClick={handleDrawer}>
                    <ChevronLeft/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {
                    menu.map(item => {
                        const Icon = item.icon
                        return (
                            <Link to={item.link} key={item.text}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <Icon/>
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} className={classes.item}/>
                                </ListItem>
                            </Link>
                        );
                    })
                }
            </List>
        </Drawer>
    );
}

NavigationDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawer: PropTypes.func.isRequired
}

export default NavigationDrawer;