import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardHeader from "@material-ui/core/CardHeader";
import {Hidden} from "@material-ui/core";
import ProjectDescription from "./ProjectDescription";
import ProjectTools from "./ProjectTools";
import ProjectDetails from "./ProjectDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    media: {
        height: 0,
        width: '100%',
        paddingTop: '49%', // 16:9
    },
    grid: {
        flexGrow: 1,
    },
    gridRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        paddingTop: '49%',
        width: '100%',
        height: 0,
        marginTop: '6%',
        marginRight: theme.spacing(2),
    },
}));

function Project({children, name, subheader, image, imageSubtitle}){
    const classes = useStyles();
    const project = getProject();

    function getProject(){
        const descType = (<ProjectDescription/>).type;
        const toolType = (<ProjectTools/>).type;
        const detailsType = (<ProjectDetails/>).type;

        let desc = <></>;
        let tool = <></>;
        let details = <></>;

        React.Children.map(children, x =>{
            if (x.type === descType) desc = x;
            else if (x.type === toolType) tool = x;
            else if (x.type === detailsType) details = x;
        });

        return {
            data: {
                description: desc,
                details: details,
                tools: tool
            }}
    }

    return (
        <>
            <Hidden mdUp implementation={"css"}>
                <Card>
                    {name && <CardHeader title={name} subheader={subheader}/>}
                    <CardMedia className={classes.media} image={image} title={imageSubtitle}/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {name}
                        </Typography>
                        {project.data.description}
                        {project.data.details}
                        {project.data.tools}
                    </CardContent>
                </Card>
            </Hidden>

            <Hidden smDown implementation={"css"}>
                <Card className={classes.root}>
                    <div className={classes.grid}>
                        <Grid container justify={"center"} spacing={2}>
                            <Grid item sm={6}>
                                {name && <CardHeader title={name} subheader={subheader}/>}
                                <CardContent>
                                    {project.data.description}
                                    {project.data.details}
                                    {project.data.tools}
                                </CardContent>
                            </Grid>
                            <Grid item sm={6} className={classes.gridRight}>
                                <CardMedia className={classes.image} image={image} title={imageSubtitle}/>
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                        {imageSubtitle}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Hidden>
        </>
    )
}

export default Project;