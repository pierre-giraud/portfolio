import Layout from "../components/Layout";
import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "./_app";
import {getTheme} from "../utils/theme";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Contact(){
    const classes = useStyles();
    const [themeObject] = useContext(ThemeContext);
    const theme = getTheme(themeObject);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
            setSuccess(true);
        }
    }, []);

    return (
        <Layout theme={theme} title={"Pierre Giraud - Contact"} page={4}>
            <Container component="main" maxWidth="md">
                <div className={classes.paper}>
                    <Typography component="h2" variant="h1">
                        Contact
                    </Typography>
                    {success && (
                        <p style={{ color: 'green'}}>
                            Successfully submitted form!
                        </p>
                    )}
                    <form className={classes.form} action="/contact?success=true" name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="Prénom"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoFocus
                                    autoComplete="fname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    label="Nom"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Envoyer
                        </Button>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}