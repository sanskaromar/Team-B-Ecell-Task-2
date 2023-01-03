import React from "react";

export default function Title(prop) {
    const style = {
        "clip-path" : "polygon(0 25%, 100% 0, 100% 100%, 10% 74%)",
        "background-color" : "#CC8227",
        "height":"60px",
        "width":"140px",
        "display" : "flex",
        "align-items" : "center",
        "justify-content" : "center"
    }
    const cont ={
        "display" : "flex",
        "align-items" : "center",
        "justify-content" : "center",
        "padding" : "10px"
    }
    const head = {
        "color":"#3E240F",
        "font-weight":"900"
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