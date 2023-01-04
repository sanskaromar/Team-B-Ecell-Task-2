import React from "react";

export default function Title(prop) {
    const style = {
        "clipPath" : "polygon(0 25%, 100% 0, 100% 100%, 10% 74%)",
        "backgroundColor" : "#CC8227",
        "height":"60px",
        "width":"140px",
        "display" : "flex",
        "alignItems" : "center",
        "justifyContent" : "center"
    }
    const cont ={
        "display" : "flex",
        "alignItems" : "center",
        "justifyContent" : "center",
        "padding" : "10px"
    }
    const head = {
        "color":"#3E240F",
        "fontWeight":"900"
    }



    return (
        <div style={cont}>
            <div 
            className="" 
            style={style}>
                <h3 
                style={head}>
                    {prop.title}
                </h3>
            </div>
        </div>
    );
}