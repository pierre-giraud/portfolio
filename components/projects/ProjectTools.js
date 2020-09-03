import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    tools: {
        marginTop: '1em',
    }
}));

function ProjectTools({children}){
    const classes = useStyles();

    return(
        <>
            <Typography className={classes.tools} gutterBottom variant="h5" component="h2">
                Outils
            </Typography>
            {children}
        </>
    )
}

export default ProjectTools;