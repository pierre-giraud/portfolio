import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    grid: {
        flexGrow: 1,
    },
    title: {
        marginTop: '1em'
    },
    subTitle: {
        marginRight: '0.5em'
    },
    detail: {
        display: 'flex',
        alignItems: 'baseline',
        marginRight: '1em'
    }
}));

function ProjectDetails({context, team, sources}){
    const classes = useStyles();

    return(
        <>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                Détails
            </Typography>

            <div className={classes.grid}>
                <Grid container justify={"left"} spacing={2}>
                    {context &&
                    <Grid item className={classes.detail}>
                        <Typography className={classes.subTitle} variant="h6" color="textSecondary" component="p">
                            Cadre :
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {context}
                        </Typography>
                    </Grid>
                    }
                    {team &&
                    <Grid item className={classes.detail}>
                        <Typography className={classes.subTitle} variant="h6" color="textSecondary" component="p">
                            Equipe :
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {team}
                        </Typography>
                    </Grid>
                    }
                    {sources &&
                    <Grid item className={classes.detail}>
                        <Button
                            startIcon={<GitHubIcon/>}
                            variant={"contained"}
                            color={"primary"}
                            size={"small"}
                            href={sources}
                            target={"_blank"}
                        >
                            Sources
                        </Button>
                    </Grid>
                    }
                </Grid>
            </div>
        </>
    )
}

export default ProjectDetails;