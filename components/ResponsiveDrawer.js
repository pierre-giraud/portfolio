import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SendIcon from '@material-ui/icons/Send';
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ThemeTypeSwitcher from "./ThemeTypeSwitcher";
import Link from "next/link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    appBarButton: {
        marginRight: theme.spacing(2),
    },
    appBarTitle: {
        flexGrow: 1,
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function ResponsiveDrawer({selectedItem}) {
    //const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const selectedIndex = selectedItem;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar + ' ' + classes.centered}>
                <Typography variant={'h5'}>
                    Mes projets
                </Typography>
            </div>
            <Divider />
            <List>
                <Link href={'/'}>
                    <ListItem
                        button
                        selected={selectedIndex === 0}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accueil" />
                    </ListItem>
                </Link>

                <Link href={'/projets_web'}>
                    <ListItem
                        button
                        selected={selectedIndex === 1}>
                        <ListItemIcon>
                            <LanguageIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Web" />
                    </ListItem>
                </Link>

                <Link href={'/projets_logiciel'}>
                    <ListItem
                        button
                        selected={selectedIndex === 2}>
                        <ListItemIcon>
                            <ComputerIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Logiciel" />
                    </ListItem>
                </Link>

                <Link href={'/autres_projets'}>
                    <ListItem
                        button
                        selected={selectedIndex === 3}>
                        <ListItemIcon>
                            <MoreHorizIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Autres" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <Link href={'/contact'}>
                <ListItem
                    button
                    selected={selectedIndex === 4}>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </Link>
            <Divider />
            <div className={classes.centered}>
                <ThemeTypeSwitcher/>
            </div>
        </div>
    );

    //const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.appBarTitle}>
                        Portfolio - Pierre Giraud
                    </Typography>
                    <Hidden smDown implementation={"css"}>
                        <Button
                            startIcon={<AttachFileIcon/>}
                            variant={"contained"}
                            color={"secondary"}
                            href={"../CV-Pierre-Giraud.pdf"}
                            target={"_blank"}
                            className={classes.appBarButton}
                        >
                            Mon CV
                        </Button>
                        <Button
                            startIcon={<GitHubIcon/>}
                            variant={"contained"}
                            color={"secondary"}
                            href={"http://github.com/Pierre-Giraud"}
                            target={"_blank"}
                            className={classes.appBarButton}
                        >
                            Github
                        </Button>
                    </Hidden>

                    <Hidden mdUp implementation={"css"}>
                        <IconButton href={"#"}>
                            <AttachFileIcon style={{color: "white"}}/>
                        </IconButton>
                        <IconButton href={"http://github.com/Pierre-Giraud"} target={"_blank"}>
                            <GitHubIcon style={{color: "white"}}/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        //container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default ResponsiveDrawer;
