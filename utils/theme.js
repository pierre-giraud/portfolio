import {createMuiTheme} from "@material-ui/core/styles";
import React from "react";

const stdTheme = {
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    scrollBehavior: 'smooth'
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1048,
            lg: 1280,
            xl: 1920,
        }
    },
};

const light = {
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5'
        },
    }
};

const dark = {
    palette: {
        type: 'dark',
        primary: {
            main: '#000000'
        },
    }
};

export const lightTheme = {...stdTheme, ...light};
export const darkTheme = {...stdTheme, ...dark};

/*export const useDarkMode = (isDarkTheme) => {
    const theTheme = isDarkTheme ? darkTheme : lightTheme;
    const [theme, setTheme] = useState(theTheme);
    console.log(theme);

    const {palette: {type}} = theme;
    const toggleDarkMode = () => {
       // const theType = type === 'light' ? ...dark : ...light;
        let theType;

        if (type === 'light') theType = dark;
        else theType = light;

        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                ...theType.palette,
                primary: {
                    main: type === 'light' ? '#000000' : '#3f51b5',
                },
                type: type === 'light' ? 'dark' : 'light'
            }
        };

        setTheme(updatedTheme);
    };

    return [theme, toggleDarkMode]
};

export const createTheme = (isDarkMode) => {
    const [myTheme, toggleDarkMode] = useDarkMode(isDarkMode);
    console.log(myTheme);
    let theme = createMuiTheme(myTheme);
    addTypographyOnTheme(theme);

    return [theme, toggleDarkMode];
};*/

export const getTheme = (theme) => {
    const theTheme = createMuiTheme(theme);
    addTypographyOnTheme(theTheme);

    return theTheme;
};

function addTypographyOnTheme(theme){
    theme.typography.h1 = {
        fontWeight: 400,
        fontSize: '5em',
        [theme.breakpoints.down('lg')]: {
            fontSize: '4em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em',
        },
    };

    theme.typography.h2 = {
        fontWeight: 300,
        fontSize: '3em',
        [theme.breakpoints.down('lg')]: {
            fontSize: '3em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        },
    };
    theme.typography.h3 = {
        fontWeight: 300,
        fontSize: '3em',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2.5em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        },
    };
}