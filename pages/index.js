import React, {useContext} from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import IntroComponent from "../components/IntroComponent";
import {getTheme} from "../utils/theme";
import {ThemeContext} from "./_app";
import Layout from "../components/Layout";

export default function Home() {
  const [themeObject] = useContext(ThemeContext);
  const theme = getTheme(themeObject);

  return (
      <Layout theme={theme} title={"Pierre Giraud"} page={0}>
        <WelcomeComponent/>
        <IntroComponent/>
      </Layout>
  )
}