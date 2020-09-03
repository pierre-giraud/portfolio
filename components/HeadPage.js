import React from "react";
import Head from "next/dist/next-server/lib/head";

function HeadPage({title, theme}){
    return (
        <Head>
            <title>{title}</title>
           {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
            <meta name="theme-color" content={theme.palette.primary.main} />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Head>
    )
}

export default HeadPage;