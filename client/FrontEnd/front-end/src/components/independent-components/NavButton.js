import React from "react";

export default function NavButton(prop) {

    const navButtonStyle = {
        'fontWeight' : 'bold'
    }

    return (
        prop.isDown ? 
        <>
            <button className="px-4 py-4 text-white border-b-2 border-transparent hover:border-white"
                    style={navButtonStyle}
            >
                {prop.name}
            </button>
        </>
        :
        <>
            <button className="px-4 py-4 text-white border-b-2 border-transparent hover:border-white hidden sm:block"
                    style={navButtonStyle}
            >
                {prop.name}
            </button>
        </>
    );
}