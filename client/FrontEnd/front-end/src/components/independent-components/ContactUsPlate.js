
import React from "react";
import "./ContactUs.css";

export default function ContactUs(prop) {

    const textfieldStyle = {
        'backgroundColor' : 'rgba( 255, 255, 255, 0.6)',
        'margin' : '5px',
        'padding' : '4px',
        'borderRadius' : '4px'
    }

    const submitStyle = {
        'display' : 'flex',
        'justifyContent' : 'center',
        'alignItems' : 'center',
    }

    const ParentContact = {
        'display' : 'flex',
        'flexDirection' : 'column',
        'justifyContent' : 'center',
        'alignItems' : 'center'
    }

    const CntcStyle = {
        'backgroundColor' : 'rgba(255, 255, 255, .4)',  
        'backdropFilter' : 'blur(5px)',
        'width' : '80%',
        'boxShadow' : '0px 0px 15px 3px rgba( 200, 137, 105, .60)',
        'borderRadius' : '15px',
        'padding' : '20px',
        'margin' : '20px',
        'display' : 'flex',
        'flexDirection' : 'column',
        'justifyContent' : 'center',
        'max-width' : '600px'
    }

    const formStyle = {
        'display' : 'flex',
        'flexDirection' : 'column',
        'justifyContent' : 'center',
    }
    
    return (
        <div style={ParentContact}>
            <div style={CntcStyle}>
                <h1 style={{'textAlign' : 'center'}}>Contact Us</h1>
                <form style={formStyle}>
                    <input type="text" placeholder="Enter your Name" className="text-black" style={textfieldStyle}>
                    </input>
                    <input type="text" placeholder="Enter your Email" className="text-black" style={textfieldStyle}>
                    </input>
                    <input type="text" placeholder="Enter your Phone Number" className="text-black" style={textfieldStyle}>
                    </input>
                </form>
                <div style={submitStyle}>
                    <div className="submitButton">
                        <h4>Submit</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}





