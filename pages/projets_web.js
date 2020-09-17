import {makeStyles} from "@material-ui/core/styles";
import React, {useContext} from "react";
import {getTheme} from "../utils/theme";
import Typography from "@material-ui/core/Typography";
import {ThemeContext} from "./_app";
import Container from "@material-ui/core/Container";
import Project from "../components/projects/Project";
import {
    projectClicetcopieDescription,
    projectOthelloDescription,
    projectPortfolioDescription,
    projectQuizDescription
} from "../utils/string";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LanguageIcon from "@material-ui/icons/Language";
import Layout from "../components/Layout";
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
    },
    avatar: {
        backgroundColor: "white !important"
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
                    subheader={"Août 2020 - Septembre 2020"}
                    image={"../portfolio-img.jpg"}
                    imageSubtitle={"Accueil du portfolio"}>
                    <ProjectDescription>{projectPortfolioDescription}</ProjectDescription>
                    <ProjectDetails context={"Personnel"} team={1} sources={"http://github.com/Pierre-Giraud/portfolio"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"React JS"} avatar={<Avatar className={classes.avatar} src="../react-icon.svg" />} />
                        <Chip className={classes.tools} color="primary" label={"Next JS"} avatar={<Avatar className={classes.avatar} src="../nextjs-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Material UI"} avatar={<Avatar className={classes.avatar} src="../material-ui-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Netlify"} avatar={<Avatar className={classes.avatar} src="../netlify-logo.png" />} />
                    </ProjectTools>
                </Project>

                <Project
                    name={"Othello"}
                    subheader={"Mai 2020"}
                    image={"../othello-game.jpg"}
                    imageSubtitle={"Écran de jeu"}>
                    <ProjectDescription>{projectOthelloDescription}</ProjectDescription>
                    <ProjectDetails context={"Études"} team={1} sources={"http://github.com/Pierre-Giraud/othello"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"HTML"} />
                        <Chip className={classes.tools} color="primary" label={"SCSS"} />
                        <Chip className={classes.tools} color="primary" label={"jQuery"} avatar={<Avatar className={classes.avatar} src="../jquery-logo.png" />} />
                    </ProjectTools>
                </Project>

                <Project
                    name={"Quiz"}
                    subheader={"Décembre 2020"}
                    image={"../quiz-accueil.jpg"}
                    imageSubtitle={"Page de profil administrateur"}>
                    <ProjectDescription>{projectQuizDescription}</ProjectDescription>
                    <ProjectDetails context={"Études"} team={2} sources={"http://github.com/Pierre-Giraud/quiz"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"HTML"} />
                        <Chip className={classes.tools} color="primary" label={"SCSS"} />
                        <Chip className={classes.tools} color="primary" label={"PHP"} />
                        <Chip className={classes.tools} color="primary" label={"jQuery"} avatar={<Avatar className={classes.avatar} src="../jquery-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Bulma"} avatar={<Avatar className={classes.avatar} src="../bulma-logo.png" />} />
                    </ProjectTools>
                </Project>

                <Project
                    name={"Clic & Copie"}
                    subheader={"Avril 2019 - Mai 2019"}
                    image={"../clicetcopie-accueil.jpg"}
                    imageSubtitle={"Accueil du site"}>
                    <ProjectDescription>{projectClicetcopieDescription}</ProjectDescription>
                    <ProjectDetails context={"Études (stage)"} team={1} link={"https://www.clicetcopie.fr/"}/>
                    <ProjectTools>
                        <Chip className={classes.tools} color="primary" label={"WordPress"} avatar={<Avatar className={classes.avatar} src="../wordpress-logo.png" />} />
                        <Chip className={classes.tools} color="primary" label={"Bulma"} avatar={<Avatar className={classes.avatar} src="../bulma-logo.png" />} />
                    </ProjectTools>
                </Project>
            </Container>
        </Layout>
    )
}