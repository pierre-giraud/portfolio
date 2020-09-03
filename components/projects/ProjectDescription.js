import Typography from "@material-ui/core/Typography";
import React from "react";

function ProjectDescription({children}){
    return(
        <>
            <Typography gutterBottom variant="h5" component="h2">
                Description
            </Typography>
            <Typography gutterBottom variant="body1" color="textSecondary" component="p">
                {children}
            </Typography>
        </>
    )
}

export default ProjectDescription;