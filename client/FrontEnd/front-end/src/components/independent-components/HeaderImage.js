import React from "react";


export default function HeaderImage(prop) {

    const HeaderImageCSS = {
        'width' : '100%',
        'position' : 'fixed',
        'top' : '0',
        'left' : '0',
        'zIndex' : '-1'
    }

    return (
        <img src={prop.background} style={HeaderImageCSS}/>
    );
}