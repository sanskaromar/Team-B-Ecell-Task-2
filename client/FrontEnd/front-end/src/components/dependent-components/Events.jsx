import React from 'react';
import quiz from "../../assets/quiz.jpg";
import './Background.css';
import Title from '../independent-components/Title';
import EventsToken from '../independent-components/EventsToken';
import './Events.css'
function Events() {

    const EventsStyle = {
        'paddingTop' : '10vh',
        'paddingBottom' : '10vh'
    }

  return (
    <div className='BackGround' style={EventsStyle}>
      <div className='py-12'>
        <Title title="Events" className="m-0 p-4"/>
      </div>
      <div className="bg-grey-500 flex flex-col items-center sm:translate-y-10 sm:flex sm:flex-row sm:justify-center">{[[quiz,"Business quiz"],[quiz,"Panel Discussion"],[quiz,"IPL Auction"]].map(([imgsrc,title])=>(
        // <div className="w-40 clip m-2 sm:w-56 relative flex justify-center cursor-pointer hover:scale-125 hover:duration-500 hover:z-50" key={title}>
        //   <img className=" w-40 sm:w-56 " src={imgsrc} alt=""/>
        //   <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        // </div>
        <EventsToken image={imgsrc} name={title}/>
        ))}
      </div>
      <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-center relative EventsLayer2">{[[quiz,"E-Talk"],[quiz,"B-Plan"]].map(([imgsrc,title])=>(
        // <div className="w-40 m-2 sm:w-56 relative flex justify-center cursor-pointer hover:z-50 hover:scale-125 hover:duration-500" key={title}>
        //   <img className='w-40 sm:w-56 clip ' src={imgsrc} alt=""/>
        //   <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        // </div>
        // <div className='-translate-y-20 '>
            <EventsToken image={imgsrc} name={title}/>
        // </div>
        ))}
      </div>
      <div className="flex flex-col sm:-translate-y-10 items-center sm:translate-y-10 sm:flex sm:flex-row sm:justify-center relative EventsLayer3" >{[[quiz,"Renaissance"],[quiz,"Stock Market"],[quiz,"Intern Fair"]].map(([imgsrc,title])=>(
        // <div className="w-40 m-2 sm:w-56 relative flex justify-center cursor-pointer hover:z-50 hover:scale-125 hover:duration-500" key={title}>
        //   <img className="w-40 sm:w-56 clip" src={imgsrc} alt=""/>
        //   <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        // </div>
        <EventsToken image={imgsrc} name={title}/>
        ))}
      </div>
    </div>
  )
}
export default Events
/*absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2*/
