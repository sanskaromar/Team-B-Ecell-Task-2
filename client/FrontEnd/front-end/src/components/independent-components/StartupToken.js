import React from "react";


export default function StartupToken(prop) {

    const outerStyle = {
        // CSS for the outer circle
        'padding' : '6px',
        'borderWidth' : '0px',
        'borderRadius' : '50%',
        'overflow' : 'hidden',
        'margin' : '10px',
        'boxShadow' : '0px 0px 15px 3px #888888',
        'backgroundColor' : 'white'
    }
    
    const innerStyle = {
        // CSS for the inner circle


        'backgroundSize' : 'cover',
        'borderRadius' : '50%',
        'overflow' : 'hidden',
        'height' : '100%',
        'width' : '100%',
        'border' : '1px solid black',
        'display': 'flex',
        'justifyContent' : 'center',
        'alignItems' : 'center',

    }

    return (
        <div className="flex justify-center">
        <div className=" w-40 h-40" style={outerStyle}>
        {/* div for the Outer boundary */}
            <div className="" style={innerStyle}>
                {/* div for inner boundry */}
                <img className="" 
                src={prop.image} alt="" />
                {/* The logo will the background if the inner circle */}
            </div>
            </div>
        </div>
    );
}