import React from 'react'

function info() {
    const data=[["80+ Colleges",<i class="fa-solid fa-building-columns fa-3x text-white"></i>],
                ["15000+ Participants",<i class="fa-solid fa-users fa-3x text-white"></i>]]
    
    const data2=[ ["120+ Startups",<i class="fa-solid fa-lightbulb fa-3x text-white "></i>],
                ["40+ Speakers",<i class="fa-solid fa-person fa-3x text-white"></i>]]
  return (
    <div className="flex flex-col justify-center bg-black sm:flex sm:flex-row m-0">
        <div className="flex justify-center w-full sm:w-1/2"> 
        {data.map(([title,icon])=>(
            <div className="flex flex-col items-center w-1/2 p-8">
            {icon}
            <h5 className="text-white text-center font-medium mt-5">{title}</h5>
            </div>
        ))}
        </div>
        <div className="flex justify-center w-full sm:w-1/2"> 
        {data2.map(([title,icon])=>(
            <div className="flex flex-col items-center w-1/2 p-8">
            {icon}
            <h5 className="text-white text-center font-medium mt-5">{title}</h5>
            </div>
        ))}
        </div>
    </div>
  )
}

export default info
