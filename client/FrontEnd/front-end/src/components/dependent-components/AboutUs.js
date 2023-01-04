import React from "react";
import './Background.css';
import Title from "../independent-components/Title";
import FrostedCard from "../independent-components/FrostedCard";


export default function AboutUs(prop) {

    const TextContent = "Entrepreneurship Cell started its functioning in October 2014 to inculcate the passion and spirit among students to pursue entrepreneurship and bring together the hustling minds having innovative solutions to the common societal problems and create scalable business ideas. E-Cell MNNIT comprises content, design, web, marketing, videography and networking teams for the collaborative and holistic work approach. E-Cell MNNIT actively hosts innumerous events and acts as a catalyst between young minds and brilliant ideas. Apart from this ECell MNNIT organizes RENAISSANCE, it's annual flagship entrepreneurial summit that provides a platform for aspiring entrepreneurs to encourage the entrepreneurial journey of translating thoughts into action through events like E PLAN, E TALK, PANEL DISCUSSION, MOCK IPL AUCTION, GAME OF STOCKS, INTERNSHIP FAIR and BUSINESS QUIZ.";
    
    const AboutUsContStyle = {
        'display' : 'flex',
        'flexDirection' : 'column',
        'justifyContent' : 'space-evenly',
        'alignItem' : 'center',
        'padding-top' : '10vh',
        'padding-bottom' : '10vh'
    }

    return (
        <>
            <div className="BackGround p-4">
                <div className="" style={AboutUsContStyle}>
                    <Title title="About Us" />
                    <FrostedCard className="p-12" content={TextContent}/>
                </div>
            </div>
        </>
    );
}