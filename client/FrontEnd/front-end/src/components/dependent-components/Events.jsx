import React from 'react'
import quiz from '../assets/quiz.jpg'
function Events() {
  return (
    <div className='my-10'>
      <div>
        <h1 className="text-5xl">Events</h1>
      </div>
      <div className="bg-grey-500 flex flex-col items-center sm:translate-y-10 sm:flex sm:flex-row sm:justify-center">{[[quiz,"Business quiz"],[quiz,"Panel Discussion"],[quiz,"IPL Auction"]].map(([imgsrc,title])=>(
        <div className="w-40 clip m-2 sm:w-56 relative flex justify-center cursor-pointer hover:scale-125 hover:duration-500 hover:z-50" key={title}>
          <img className=" w-40 sm:w-56 " src={imgsrc} alt=""/>
          <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        </div>
        ))}
      </div>
      <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-center">{[[quiz,"E-Talk"],[quiz,"B-Plan"]].map(([imgsrc,title])=>(
        <div className="w-40 m-2 sm:w-56 relative flex justify-center cursor-pointer hover:z-50 hover:scale-125 hover:duration-500" key={title}>
          <img className='w-40 sm:w-56 clip ' src={imgsrc} alt=""/>
          <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        </div>
        ))}
      </div>
      <div className="flex flex-col sm:-translate-y-10 items-center sm:translate-y-10 sm:flex sm:flex-row sm:justify-center">{[[quiz,"Renaissance"],[quiz,"Stock Market"],[quiz,"Intern Fair"]].map(([imgsrc,title])=>(
        <div className="w-40 m-2 sm:w-56 relative flex justify-center cursor-pointer hover:z-50 hover:scale-125 hover:duration-500" key={title}>
          <img className="w-40 sm:w-56 clip" src={imgsrc} alt=""/>
          <h3 className="absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
export default Events
/*absolute text-2xl font-normal text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2*/