import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Startup = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="bg-black h-[250px] pt-[10px]">
            <div className="justify-center items-center">
                <h1 className="text-white font-serif text-4xl bold justify-center items-center flex">Startups by MNNITians</h1>
            </div>
            <Carousel className="w-[100%] flex justify-center items-center" {...settings}>
                <Wrap>
                    <div className="mt-8 mx-[32px] flex justify-center items-center">
                        <div className="mr-[40px] startup cursor-pointer">
                            <div className="bg-white h-36 w-36 flex justify-center items-center rounded-full border-solid border-2 border-indigo-600">
                                <a href="google"><img className="w-[120px]" src="/images/download.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Wrap>
                <Wrap>
                    <div className="mt-8 mx-[32px] flex justify-center items-center">
                        <div className="mr-[40px] startup cursor-pointer">
                            <div className="bg-white h-36 w-36 flex justify-center items-center rounded-full border-solid border-2 border-indigo-600">
                                <a href="google"><img className="w-[120px]" src="/images/download.pn" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Wrap>
                <Wrap>
                    <div className="mt-8 mx-[32px] flex justify-center items-center">
                        <div className="mr-[40px] startup cursor-pointer">
                            <div className="bg-white h-36 w-36 flex justify-center items-center rounded-full border-solid border-2 border-indigo-600">
                                <a href="google"><img className="w-[120px]" src="/images/download.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Wrap>
                <Wrap>
                    <div className="mt-8 mx-[32px] flex justify-center items-center">
                        <div className="mr-[40px] startup cursor-pointer">
                            <div className="bg-white h-36 w-36 flex justify-center items-center rounded-full border-solid border-2 border-indigo-600">
                                <a href="google"><img className="w-[120px]" src="/images/download.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Wrap>
                <Wrap>
                    <div className="mt-8 mx-[32px] flex justify-center items-center">
                        <div className="mr-[40px] startup cursor-pointer">
                            <div className="bg-white h-36 w-36 flex justify-center items-center rounded-full border-solid border-2 border-indigo-600">
                                <a href="google"><img className="w-[120px]" src="/images/download.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
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
    left: 2px;
  }
  .slick-next {
    right: 20px;
  }
  .slick-track{
    width:90vw;
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