import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./ResponsiveDrawer";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Head from "next/dist/next-server/lib/head";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    wrapper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh"
    },
    content: {
        marginBottom: theme.spacing(2),
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        padding: theme.spacing(3,2),
        marginTop: "auto"
    },
    footerDiv: {
        textAlign: "center"
    }
}));

function HeadPage({title, theme}){
    return (
        <Head>
            <title>{title}</title>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
            <meta name="theme-color" content={theme.palette.primary.main} />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>
    )
}

function Footer(){
    const classes = useStyles();

    return (
        <Paper className={classes.footer} component={'footer'} elevation={10} square>
            <div className={classes.footerDiv}>
                <Typography variant="body1" component="p">
                    2020 - Pierre Giraud - giraudp1997@gmail.com
                </Typography>
                <Typography variant="body1" component="p">
                    Version 1
                </Typography>
            </div>
        </Paper>
    )
}

function Layout({children, theme, title, page}){
    const classes = useStyles();

    return (
        <>
            <HeadPage theme={theme} title={title}/>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.root}>
                    <ResponsiveDrawer selectedItem={page} />
                    <div className={classes.wrapper}>
                        <header className={classes.toolbar} />

                        <div className={classes.content}>
                            {children}
                        </div>

                        <Footer/>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Layout;