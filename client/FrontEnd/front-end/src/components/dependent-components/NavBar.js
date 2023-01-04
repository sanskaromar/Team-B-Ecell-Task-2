import React from "react";
import ecelllogo from "../../assets/ECellLogo.png";
import NavButton from "../independent-components/NavButton";
import burgerIcon from "../../assets/burgerIcon.png";


import { useState } from "react";

export default function NavBar(prop) {

    const [ NavisDown, ToggleNav] = useState( false);

    const logoStyle = {
        'height' : '100px'
    }

    const ToggleNavBar = () => {
        ToggleNav( !NavisDown);
        console.log( "Toggles");
        console.log( NavisDown);
    }

    const NavDownStyle = {
        'backgroundColor' : 'rgba(255, 255, 255, .15)',  
        'backdropFilter' : 'blur(5px)',
        'position' : 'fixed',
        'right' : '0',
        'top' : '0'
    }

    
    return (
        NavisDown ? 
        <>
            <div className="flex flex-row justify-between">
                <div className="p-1 sm:p-4" >
                {/* A div that contains ecell logo */}
                    <img src={ecelllogo} style={logoStyle}/>

                </div>


                <div className="flex flex-col sm:flex-row " style={NavDownStyle}>
                {/* A div that contains the navigation buttons */}
                    <div className="px-4 py-4 flex flex-row justify-end sm:hidden text-white border-b-2 border-transparent cursor-pointer"  onClick={ToggleNavBar}
                    >
                        close
                    </div>
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
                    {/* <BurgerButton ToggleButton={ToggleNav} ToggleValue={NavisDown}  onclick={ToggleNavBar}/> */}
                    <div className="px-4 py-4 flex flex-row justify-end sm:hidden cursor-pointer"  onClick={ToggleNavBar}
                    >
                        <img src={burgerIcon} className="h-8 w-8"/>
                    </div>
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