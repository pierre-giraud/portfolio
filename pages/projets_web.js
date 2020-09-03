import {makeStyles} from "@material-ui/core/styles";
import React, {useContext} from "react";
import {getTheme} from "../utils/theme";
import Typography from "@material-ui/core/Typography";
import {ThemeContext} from "./_app";
import Container from "@material-ui/core/Container";
import Project from "../components/projects/Project";
import {projectPortfolioDescription} from "../utils/string";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LanguageIcon from "@material-ui/icons/Language";
import Layout from "../components/layout";
import ProjectDescription from "../components/projects/ProjectDescription";
import ProjectTools from "../components/projects/ProjectTools";
import ProjectDetails from "../components/projects/ProjectDetails";

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
    }
}));

export default function Web(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Projets WEB"} page={1}>
            <Container>
                <div className={classes.pageTitle}>
                    <LanguageIcon className={classes.icon}/>
                    <Typography variant={"h1"}>Projets WEB</Typography>
                </div>

                <Project
                    name={"Mon Portfolio"}
                    subheader={"Août 2020"}
                    image={"../portfolio-img.jpg"}
                    imageSubtitle={"Accueil du portfolio"}>
                    <ProjectDescription>{projectPortfolioDescription}</ProjectDescription>
                    <ProjectDetails context={"Personnel"} team={1} sources={"http://github.com/Pierre-Giraud"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"React JS"} avatar={<Avatar src="../react-icon.svg" />} />
                        <Chip className={classes.tools} color="primary" label={"Next JS"} avatar={<Avatar src="../nextjs-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Material UI"} avatar={<Avatar src="../material-ui-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Netlify"} avatar={<Avatar src="../netlify-logo.png" />} />
                    </ProjectTools>
                </Project>
            </Container>
        </Layout>
    )
}