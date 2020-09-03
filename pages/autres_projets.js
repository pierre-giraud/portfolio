import HeadPage from "../components/HeadPage";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, {useContext} from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import {ThemeContext} from "./_app";
import {getTheme} from "../utils/theme";
import Layout from "../components/layout";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
    },
    paper: {
        padding: '10px',
    }
}));

export default function Autres(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Autres projets"} page={3}>
            <p>Ceci est la rubrique AUTRES PROJETS</p>
        </Layout>
    )
}