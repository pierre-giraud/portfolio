import {makeStyles} from "@material-ui/core/styles";
import React, {useContext} from "react";
import {ThemeContext} from "./_app";
import {getTheme} from "../utils/theme";
import Layout from "../components/Layout";
import ProjectDescription from "../components/projects/ProjectDescription";
import {projectSTBServerDescription} from "../utils/string";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectTools from "../components/projects/ProjectTools";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Project from "../components/projects/Project";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: "1em",
        display: "flex",
        alignItems: "center",
    },
    icon: {
        width: "2em",
        height: "2em",
        marginRight: "1em",
    },
    tools: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    avatar: {
        backgroundColor: "white !important"
    }
}));

export default function Autres(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Autres projets"} page={3}>
            <Container>
                <div className={classes.pageTitle}>
                    <MoreHorizIcon className={classes.icon}/>
                    <Typography variant={"h1"}>Autres projets</Typography>
                </div>

                <Project
                    name={"StbServer"}
                    subheader={"Avril 2020"}>
                    <ProjectDescription>{projectSTBServerDescription}</ProjectDescription>
                    <ProjectDetails context={"Études"} team={1} sources={"http://github.com/Pierre-Giraud/stbserver"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"Spring"} avatar={<Avatar className={classes.avatar} src="../spring-logo.png" />} />
                    </ProjectTools>
                </Project>
            </Container>
        </Layout>
    )
}