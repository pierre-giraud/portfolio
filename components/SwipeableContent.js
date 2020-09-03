import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        name: "Logo React 1",
        path:
            "/react-icon.svg"
    },
    {
        name: "Logo Next JS",
        path:
            "/nextjs-logo.png"
    },
    {
        name: "Logo Material-UI",
        path:
            "/material-ui-logo.png"
    },
];

const useStyles = makeStyles((theme) => ({
    swiperContainer: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    }
}));

function SwipeableContent() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            containerStyle={{width: '100%', height: '100%'}}
            className={classes.swiperContainer}
            interval={4000}
        >
            {images.map((step, index) => (
                <div key={step.name} className={classes.image} style={{backgroundImage: 'url(' + step.path + ')'}}/>
            ))}
        </AutoPlaySwipeableViews>
    );
}

export default SwipeableContent;
