import React from "react";

export default function NavButton(prop) {

    const navButtonStyle = {
        'fontWeight' : 'bold'
    }

    return (
        prop.isDown ? 
        <>
            <div className="px-4 py-4 text-white border-b-2 border-transparent hover:border-white cursor-pointer"
                    style={navButtonStyle}
            >
                {prop.name}
            </div>
        </>
        :
        <>
            <div className="px-4 py-4 text-white border-b-2 border-transparent hover:border-white hidden sm:block cursor-pointer"
                    style={navButtonStyle}
            >
                {prop.name}
            </div>
        </>
    );
}