import React from "react";
import "../dependent-components/Events.css";

export default function EventsToken(prop) {

    const parent = {
        'filter' : 'drop-shadow(0px 0px 15px #888888)',
    }

    const outerStyle = {
        // CSS for outer Hexagon
        'widht' : '100%',
        'height' : '100%',
        'padding' : '0px',
        'clipPath' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',

        
    }   
    
    const innerStyle = {
        // CSS for inner Hexagon
        'backgroundImage' : 'url('+prop.image+')',
        // The logo will the background if the inner hexagon

        'backgroundSize' : 'cover',
        'widht' : '100%',
        'height' : '100%',


        'clipPath' : 'polygon(28% 3%, 72% 3%, 96% 50%, 72% 97%, 28% 97%, 4% 50%)',
        

        'display' : 'flex',
        'justifyContent' : 'center',
        'alignItems' : 'center',
        'textAlign' : 'center',
        

        'color' : 'white'
    }

    const textStyle = {
        'fontWeight' : '700',
        'textShadow' : '0px 0px 15px black',
        'zIndex' : '1'
    }

    return (
        <div className="w-32 h-32 mx-8 my-4 sm:w-32 sm:h-32 sm:mx-12 sm:my-0 lg:w-48 lg:h-48 lg:mx-20" style={parent}>
            <div className="hexagon bg-white hover:bg-yellow-900" style={outerStyle}>
                {/* div for outer hexagon */}
                <div style={innerStyle}>
                    {/* div for inner hexagon */}
                    <h4 style={textStyle} >
                        {prop.name}
                    </h4>
                </div>
            </div>
        </div>
    );
}