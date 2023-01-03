import React from "react";
import HeaderImage from "../independent-components/HeaderImage";
import NavBar from '../dependent-components/NavBar';

export default function Header(prop) {

    const textStyle = {
        'color' : 'white',
        'textAlign' : 'center'
    }

    const BrStyle = {
        'border' : '2px solid white',
        // 'marginLeft' : '100px',
        // 'marginRight' : '100px'
    }

    return (
        <>
            <NavBar />
            <div className=" px-12 sm:px-32 sm:py-12 md:p-40">
                <h1 style={textStyle}>
                    ECELL MNNIT
                    <div style={BrStyle}></div>
                    UNFOLDING ADVANCEMENT
                </h1>
            </div>
            <HeaderImage background={prop.background} />
        </>
    );
}