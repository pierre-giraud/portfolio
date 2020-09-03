import Grid from "@material-ui/core/Grid";
import VirtualScreens from "./VirtualScreens";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {welcomeText1} from "../utils/string";
import Typography from "@material-ui/core/Typography";
import ScrollingArrow from "./ScrollingArrow";

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.primary.light,
        [theme.breakpoints.up('md')]: {
            height: '100vh',
            marginTop: -(theme.mixins.toolbar.minHeight + theme.spacing(1)),
        },
    },
    text: {
        color: 'white',
    },
    front: {
        zIndex: 10,
    },
    wText: {
        fontWeight: '300',
        fontSize: '2em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
    },
    circle1: {
        position: 'absolute',
        borderRadius: '50%',
        width: '150%',
        height: 'auto',
        paddingTop: '150%',
        left: '-100%',
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    grid2: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(3),
        },
    }
}));

function WelcomeComponent(){
    const classes = useStyles();

    return (
        <>
            <Grid container justify={"center"} alignItems={"center"} className={classes.main}>
                <Grid item sm={8} md={5} className={classes.text + ' ' + classes.front}>
                    <Container>
                        <Typography variant={"h1"}>
                            Pierre Giraud
                        </Typography>
                        <Typography variant={"h2"}>
                            Développeur Web Junior
                        </Typography>
                        <Typography paragraph className={classes.wText}>
                            {welcomeText1}
                        </Typography>
                    </Container>
                </Grid>
                <Grid item sm={8} md={7} className={classes.front + ' ' + classes.grid2}>
                    <VirtualScreens/>
                </Grid>

                <div className={classes.circle1}/>
                <ScrollingArrow/>
            </Grid>
        </>
    )
}

export default WelcomeComponent;