import {makeStyles} from "@material-ui/core/styles";
import React, {useContext} from "react";
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

export default function Logiciel(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Projets Logiciel"} page={2}>
            <p>Ceci est la rubrique LOGICIEL</p>
        </Layout>
    )
}