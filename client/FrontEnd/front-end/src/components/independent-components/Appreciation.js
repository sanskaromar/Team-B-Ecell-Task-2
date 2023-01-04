import React from 'react';
import styled from "styled-components";

const Appreciation = (prop) => {
  return (
    <Wrap>
      <div
        className="">
        <img
          className="m-auto mt-2.5" src={prop.image} alt="" />
        <div
          className="w-[70%] m-auto mt-2.5">
          <h2
            className="justify-center items-center flex text-2xl text-[#BE7041]">
            {prop.say}
          </h2>
          <p
            className="text-black flex justify-center">
            {prop.lines}
          </p>
        </div>
        <p
          className="justify-center items-center flex text-sky-400 mt-3">
          {prop.name}
        </p>
        <p
          className="justify-center items-center flex text-sky-400">
          {prop.com}
        </p>
      </div>
    </Wrap>
  )
};


const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    /* cursor: pointer; */
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
export default Appreciation;