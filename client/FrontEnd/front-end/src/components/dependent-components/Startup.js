import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StartupToken from './components/independent-components/StartupToken';
import './Background.css';
const logo = '/images/download.png';
const logo1 = '/images/baabtra.png';
const logo2 = '/images/everycrave.jfif';
const logo3 = '/images/kratical.png';
const logo4 = '/images/loco.png';
const logo5 = '/images/trelos.png';
const logo6 = '/images/pvr.jfif';
const logo7 = '/images/symb.png';
const logo8 = '/images/drivezy.png';

const Startup = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive:[
          {
            breakpoint: 730,
            settings:{
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 400,
            settings:{
              slidesToShow: 1,
            }
          }
        ]
    };
    return (
        <div className="bg-gradient-to-l from-zinc-900 via-purple-100 to-zinc-900 h-[300px] pt-[10px]">
            <div className="justify-center items-center">
                <h1 className="text-white font-serif text-4xl bold justify-center items-center flex max-md:text-2xl">Startups by MNNITians</h1>
            </div>
            <Carousel className="w-[100%] flex justify-center items-center" {...settings}>
                <Wrap>
                    <StartupToken image={logo}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo1}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo2}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo3}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo4}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo5}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo6}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo7}/>
                </Wrap>
                <Wrap>
                    <StartupToken image={logo8}/>
                </Wrap>
            </Carousel>
        </div>
    )
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 1vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-prev {
    /* left: 200px; */
  }
  .slick-next {
    right: 20px;
  }
  .slick-track{
    /* width:90vw; */
    overflow: hidden;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      /* width: 100%; */
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;


export default Startup;