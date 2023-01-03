import React from "react";
import ecelllogo from "../../assets/ECellLogo.png";
import NavButton from "../independent-components/NavButton";
import BurgerButton from "../independent-components/BurgerButton";

import { useState } from "react";

export default function Header(prop) {

    const [ NavisDown, ToggleNav] = useState( false);

    const logoStyle = {
        'height' : '100px'
    }

    const havBtnCont = {

    }

    
    return (
        NavisDown ? 
        <>
            <div className="flex flex-row justify-between">
                <div className="p-1 sm:p-4" >
                {/* A div that contains ecell logo */}
                    <img src={ecelllogo} style={logoStyle}/>

                </div>


                <div className="flex h-12 flex-col sm:flex-row ">
                {/* A div that contains the navigation buttons */}
                    
                    <NavButton name="Home" isDown={NavisDown} />
                    <NavButton name="Events" isDown={NavisDown}  />
                    <NavButton name="Startups" isDown={NavisDown}  />
                    <NavButton name="Webinar" isDown={NavisDown}  />
                    <NavButton name="Team" isDown={NavisDown}  />
                    <NavButton name="Contact" isDown={NavisDown}  />
                    
                </div>
            </div>
        </>
        :
        <>
            <div className="flex flex-row justify-between">
                <div className="p-1 sm:p-4" >
                {/* A div that contains ecell logo */}
                    <img src={ecelllogo} style={logoStyle}/>

                </div>


                <div className="flex h-12 flex-col sm:flex-row ">
                {/* A div that contains the navigation buttons */}
                    <BurgerButton ToggleButton={ToggleNav} ToggleValue={NavisDown}/>
                    <NavButton name="Home" isDown={NavisDown} />
                    <NavButton name="Events" isDown={NavisDown}  />
                    <NavButton name="Startups" isDown={NavisDown}  />
                    <NavButton name="Webinar" isDown={NavisDown}  />
                    <NavButton name="Team" isDown={NavisDown}  />
                    <NavButton name="Contact" isDown={NavisDown}  />
                    
                </div>
            </div>
        </>
    );

}