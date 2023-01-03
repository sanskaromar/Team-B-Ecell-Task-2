import React from "react";
import burgerIcon from "../../assets/burgerIcon.png";

export default function Header(prop) {

    const runToggleNav = () =>{
        prop.ToggleNav( !prop.NavisDown);
    }

    return (
        <>
            <button className="px-4 py-4 flex flex-row justify-end sm:hidden" onClick={runToggleNav}
            >
                <img src={burgerIcon} className="h-8 w-8"/>
            </button>
        </>
    );
}