import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import SwipeableContent from "./SwipeableContent";

const useStyles = makeStyles((theme) => ({
    imageDiv: {
        position: 'relative',
        width: '100%',
        margin: '0 auto',
    },
    computerContainer: {
        width: '55%',
        margin: '0 auto',
    },
    computerImage: {
        width: '100%',
    },
    tabletContainer: {
        width: '36%',
        position: 'absolute',
        right: '3%',
        bottom: 0,
    },
    tabletImage: {
        width: '100%',
    },
    mobileContainer: {
        position: 'absolute',
        width: '11%',
        left: '21%',
        bottom: 0,
    },
    mobileImage: {
        width: '100%',
    },
    computerContent: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '5%',
        left: '24%',
        width: '52%',
        height: '66%',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    tabletContent: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '9%',
        left: '6%',
        width: '88%',
        height: '81%',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    mobileContent: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '8%',
        left: '5%',
        width: '89%',
        height: '80%',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    textJustify: {
        textAlign: 'justify',
    }
}));

function VirtualScreens(){
    const classes = useStyles();

    return (
        <div className={classes.imageDiv}>
            <div className={classes.computerContainer}>
                <img className={classes.computerImage} src={"../computer.png"} alt={"Ecran d'ordinateur"}/>
                <div className={classes.computerContent}>
                    <SwipeableContent/>
                </div>
            </div>

            <div className={classes.tabletContainer}>
                <img className={classes.tabletImage} src={"../tablet.png"} alt={"Ecran de tablette"}/>
                <div className={classes.tabletContent}>
                    <SwipeableContent/>
                </div>
            </div>

            <div className={classes.mobileContainer}>
                <img className={classes.mobileImage} src={"../mobile.png"} alt={"Ecran de smartphone"}/>
                <div className={classes.mobileContent}>
                    <SwipeableContent/>
                </div>
            </div>
        </div>
    )
}

export default VirtualScreens;