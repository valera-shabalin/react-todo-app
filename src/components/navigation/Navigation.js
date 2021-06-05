import React, { useState } from "react";

import NavigationAppBar from "./NavigationAppBar";
import NavigationDrawer from "./NavigationDrawer";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <NavigationAppBar handleDrawer={handleDrawerOpen}/>
            <NavigationDrawer handleDrawer={handleDrawerClose} open={open}/>
        </>
    );
}