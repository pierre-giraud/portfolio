import "../styles/ScrollingArrow.css";
import React, {useState, createContext} from "react";
import PropTypes from 'prop-types';
import {lightTheme} from "../utils/theme";

export const ThemeContext = createContext(), { Provider: ThemeContextProvider } = ThemeContext;

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  let theme = useState(() => {
    try {
      const item = window.localStorage.getItem("theme");
      return item ? JSON.parse(item) : lightTheme;
    } catch (error) {
      //console.log(error);
      return lightTheme;
    }
  });

  return (
      <ThemeContextProvider value={theme}>
        <Component {...pageProps} />
      </ThemeContextProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


export default MyApp
