import React from "react";


export default function HeaderImage(prop) {

    const HeaderImageCSS = {
        'width' : '100%',
        'position' : 'fixed',
        'top' : '0',
        'left' : '0',
        'zIndex' : '-1'
    }

    const HeaderImagContCSS = {
        'width' : '100%',
        'height' : '200vw',
        'zIndex' : '-1',
        'position' : 'fixed',
        'top' : '0',
        'left' : '0',
        'backgroundColor' : 'black'
    }

    return (
        <div style={ HeaderImagContCSS }>
            <img src={prop.background} style={HeaderImageCSS}/>
        </div>
    );
}