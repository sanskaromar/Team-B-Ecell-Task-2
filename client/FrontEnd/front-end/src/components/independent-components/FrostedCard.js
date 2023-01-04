import React from "react";

export default function FrostedCard(prop) {
    
    const cardStyle = {
        'backgroundColor' : 'rgba(190, 127, 95, .4)',  
        'backdropFilter' : 'blur(5px)',
        'boxShadow' : '0px 0px 15px 3px rgba( 179, 116, 74, .30)',
        'borderRadius' : '15px'
        
    }

    return (
        <>
            <div style={cardStyle} className="p-4 m-4 text-white text-shadow-sm">
                <p>{prop.content}</p>
            </div>
        </>
    );
}