import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import HeadPage from "./HeadPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./ResponsiveDrawer";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
    },
}));

function Layout({children, theme, title, page}){
    const classes = useStyles();

    return (
        <>
            <HeadPage theme={theme} title={title}/>

            <ThemeProvider theme={theme}>
                <main>
                    <CssBaseline />
                    <div className={classes.root}>
                        <ResponsiveDrawer selectedItem={page} />
                        <div className={classes.content}>
                            <div className={classes.toolbar} />

                            {children}
                        </div>
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Layout;