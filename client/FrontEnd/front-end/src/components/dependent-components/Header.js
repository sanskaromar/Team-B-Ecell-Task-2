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

    const ContStuleHeader = {
        'width' : '100%',
        'paddingBottom' : '66.66%'
    }

    return (
        <>
            <NavBar />
            <div className=" px-12 sm:px-32 sm:py-12 md:p-32 lg:p-56 xl:p-56 xl:m-20">
            {/* <div style={ContStuleHeader} className="px-12 sm:px-32"> */}
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