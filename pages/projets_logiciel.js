import {makeStyles} from "@material-ui/core/styles";
import React, {useContext} from "react";
import {ThemeContext} from "./_app";
import {getTheme} from "../utils/theme";
import Layout from "../components/Layout";
import ComputerIcon from '@material-ui/icons/Computer';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ProjectDescription from "../components/projects/ProjectDescription";
import {projectDjubakaDescription, projectSolitaireChessDescription} from "../utils/string";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectTools from "../components/projects/ProjectTools";
import Chip from "@material-ui/core/Chip";
import Project from "../components/projects/Project";

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

export default function Logiciel(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Projets Logiciel"} page={2}>
            <Container>
                <div className={classes.pageTitle}>
                    <ComputerIcon className={classes.icon}/>
                    <Typography variant={"h1"}>Projets Logiciel</Typography>
                </div>

                <Project
                    name={"Djubaka"}
                    subheader={"Avril 2020 - Mai 2020"}
                    image={"../djubaka-lecteur.jpg"}
                    imageSubtitle={"Interface utilisateur du lecteur de playlist"}
                    defaultImageFormat={false}>
                    <ProjectDescription>{projectDjubakaDescription}</ProjectDescription>
                    <ProjectDetails context={"Études"} team={1} sources={"http://github.com/Pierre-Giraud/djubaka"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"Java"} />
                    </ProjectTools>
                </Project>

                <Project
                    name={"Solitaire Chess"}
                    subheader={"Juin 2016"}
                    image={"../solitaireChess-plateau.png"}
                    imageSubtitle={"Écran de jeu au niveau 1"}>
                    <ProjectDescription>{projectSolitaireChessDescription}</ProjectDescription>
                    <ProjectDetails context={"Études"} team={3}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"Java"} />
                    </ProjectTools>
                </Project>
            </Container>
        </Layout>
    )
}