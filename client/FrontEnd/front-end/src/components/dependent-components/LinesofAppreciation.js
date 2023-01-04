import React from 'react';
import styled from "styled-components";
import Appreciation from './components/independent-components/Appreciation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const people1 = './images/download.jfif';
const people2 = './images/people2.jfif';
const people3 = './images/people3.jfif';
const people4 = './images/people4.jfif';
const people5 = './images/people5.jfif';

const LinesofAppreciation = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div>
            <div
                className="bg-[#F9F3EB] h-[450px] pt-[10px] max-md:h-[550px]">
                <div
                    className="justify-center items-center">
                    <h1
                        className="text-black font-serif text-4xl bold justify-center items-center flex max-md:text-2xl">
                        Lines Of Appreciation
                    </h1>
                </div>
                <Carousel {...settings}>
                    <Appreciation
                        image={people1}
                        name="Abhilekh Agarwal"
                        say="Great Effort"
                        lines="It was a great effort by Team Renaissance.Greatly appreciated coming back to college. Your hard work and efforts has lead to such successful event."
                        com="CTO CUBE26"
                    />
                    <Appreciation
                        image={people2}
                        say="Mindblowing Service"
                        lines="I would like to give my personal congrats to the entire team of NIT Allahabad for putting up a wonderful event.The attendees were more than ecstatic than what I have ever seen anywhere else and it is this spirit that puts up a favourable stage for people like us to speak/perform."
                        name="Gary Dalal"
                        com="Director, Apptology FZCO"
                    />
                    <Appreciation
                        image={people3}
                        say="Thrilling Experience"
                        lines="I was thrilled to see such an amazing audience. The events were extraordinary and it surely made an impact to many aspiring entrepreneurs. A platform for the genesis of great ideas."
                        name="Mansi Matela"
                        com="Head-Strategy & New Intiatives at SilverPus"
                    />
                    <Appreciation
                        image={people4}
                        say="Intuitive Design"
                        lines="A great event, packed with so much young audience and great speakers,offering a unique balance between entrepreneurship and industrial applications.In short: offering a compact source of inspiration & opportunity "
                        name="Chetanya Golecha"
                        com="Co-Founder Water Float"
                    />
                    <Appreciation
                        image={people5}
                        say="Efficient Collaborating"
                        lines=" I duly hope the legacy continues eternally and provide ample opportunities to cater and optimistic demeanour towards being an entrepreneur, surpassing the bars set by the previous endeavours. I heartily welcome everyone to be a part of 6.0 E-summit Renaissance 2020 and make it a grand success with your support and enthusiasm."
                        name="Rajeev Tripathi"
                        com="Director MNNIT Allahabad"
                    />
                </Carousel>
            </div>
        </div>
    )
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 1;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: #BE7041;
    }
  }
  li.slick-active button:before {
    color: #BE7041;
}
.slick-list {
    overflow: hidden;
}
.slick-prev {
    color: #BE7041;
    left: 0px;
    /* display: block; */
  }
  .slick-prev:before {
      color: #BE7041;
      /* left: 0px; */
      /* display: block; */
    }
    .slick-next {
        right: 0px;
    }
    .slick-next:before {
        color: #BE7041;
        /* right: 0px; */
    }
`;

export default LinesofAppreciation;