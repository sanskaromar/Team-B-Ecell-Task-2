import React from "react";
import './TokenCSS.css';

export default function EventsToken(prop) {

    const parent = {
        'filter' : 'drop-shadow(0px 0px 15px #888888)',
    }

    const outerStyle = {
        // CSS for outer Hexagon
        'widht' : '100%',
        'height' : '100%',
        'padding' : '0px',
        'backgroundColor' : 'white',
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
        'textShadow' : '0px 0px 15px black'
    }

    return (
        <div className="w-32 h-32 md:w-56 md:h-56" style={parent}>
            <div className="" style={outerStyle}>
                {/* div for outer hexagon */}
                <div style={innerStyle}>
                    {/* div for inner hexagon */}
                    <h4 style={textStyle}>
                        {prop.name}
                    </h4>
                </div>
            </div>
        </div>
    );
}