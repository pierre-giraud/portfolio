import React, {useContext, useState}  from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {ThemeContext} from "../pages/_app";
import {darkTheme, lightTheme} from "../utils/theme";
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    form: {
        alignItems: 'center'
    },
}));

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            //console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            //console.log(error);
        }
    };

    return [storedValue, setValue];
}

function ThemeTypeSwitcher(){
    const classes = useStyles();
    const [theme, setTheme] = useContext(ThemeContext);
    const [storedTheme, setStoredTheme] = useLocalStorage('theme', theme);
    const [state, setState] = useState(false);

    const toggleTheme = () => {
        setTheme(theme.palette.type === "dark" ? lightTheme : darkTheme);
        setStoredTheme(theme.palette.type === "dark" ? lightTheme : darkTheme);
    };

    const handleChange = () => {
        setState((prev) => !prev);
        toggleTheme();
    };

    React.useEffect(() => {
        try {
            const item = window.localStorage.getItem("theme");
            const theme = item ? JSON.parse(item) : lightTheme;

            setState(theme.palette.type === 'dark');
        } catch (error) {
            setState(false);
        }
    }, []);

    return(
        <>
            <FormGroup className={classes.form} row={true}>
                <Switch checked={state} onChange={handleChange}/>
                {state ? <Brightness3Icon/> : <Brightness5Icon/>}
            </FormGroup>
            {/*<FormControlLabel
                control={<Switch checked={state} onChange={handleChange} icon={<Brightness5Icon/>} checkedIcon={<Brightness3Icon/>}/>}
                label={"Mode sombre"}>
            </FormControlLabel>*/}
        </>
    )
}

export default ThemeTypeSwitcher;