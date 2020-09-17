import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import IntroCard from "./IntroCard";
import {loremipsum, otherProjectsIntro, softwareDvptIntro, webDvptIntro} from "../utils/string";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(5)
    },
    grid: {
        flexGrow: 1,
        marginTop: theme.spacing(12)
    },
    iTitle: {
        textAlign: 'center'
    }
}));

function IntroComponent(){
    const classes = useStyles();

    return(
        <Container id={"intro"} className={classes.root}>
            <Typography variant={"h2"} className={classes.iTitle}>
                Du développement web et logiciel ...
            </Typography>

            <div className={classes.grid}>
                <Grid
                    container
                    justify={"center"}
                    spacing={3}
                >
                    <Grid item xs={12} sm={4}>
                        <IntroCard title={"Développement WEB"} link={"/projets_web"}>
                            {webDvptIntro}
                        </IntroCard>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <IntroCard title={"Développement Logiciel"} link={"/projets_logiciel"}>
                            {softwareDvptIntro}
                        </IntroCard>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <IntroCard title={"Autres projets"} link={"/autres_projets"}>
                            {otherProjectsIntro}
                        </IntroCard>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default IntroComponent;