import React from 'react'
import Helmet from 'react-helmet'

function title() {
    return(
        <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

            <title>Hypay</title>
        </Helmet>
    );
    
}

export default title;