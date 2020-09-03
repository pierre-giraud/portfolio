import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import React from "react";
import Link from "next/link";

function IntroCard({children, title, link}){
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={link}>
                    <Button size="small" color="primary" endIcon={<SearchIcon/>}>
                        En savoir plus
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default IntroCard;