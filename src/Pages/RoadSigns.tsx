// import React from 'react'    
import RoadSignsObj from '../assets/Objects/RoadSigns'
import RoadSignCard from '../components/RoadSigns'
import fundamentalbg from '../assets/images/background.png'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const RoadSigns = () => {


    const navigate = useNavigate();

  return (
    <div className='bg-home'>

        <div
        style={{
          backgroundImage: `url(${fundamentalbg})`,
          width: '100vw',
          minHeight: '100vh',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: 'auto',
          backdropFilter: 'blur(10px)',
        }}
      >

      
            <div className='absolute inset-0 bg-white/5 backdrop-blur-sm overflow-y-scroll h-[calc(100vh-70px)]'>
                
                <h1 className='text-white text-center text-xl my-5 md:text-2xl'>ROAD SIGNS</h1>
                
                
                <div className='RoadsignWrapper'>

                    {/* PROHIBITORY SIGNS */}
                    <div className='mt-5'>
                        
                        <h1 className='text-white font-bold text-md bg-red-400 p-2 w-fit rounded-tr-2xl rounded-br-2xl'>Prohibitory Signs</h1>
                        <div className='mt-3 flex flex-wrap justify-center items-center gap-5'>
                            {RoadSignsObj.ProhibitorySigns.map((item, index) => (
                                <RoadSignCard 
                                    key={index}
                                    title={item.title}
                                    description={item.Description}
                                    image={item.img}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                    </div>

                    {/* MANDATORY SIGNS */}
                    <div className='mt-10'>
                        
                        <h1 className='text-white font-bold text-md bg-red-400 p-2 w-fit rounded-tr-2xl rounded-br-2xl'>Mandatory Signs</h1>
                        <div className='mt-3 flex flex-wrap justify-center items-center gap-5'>
                            {RoadSignsObj.MandatorySigns.map((item, index) => (
                                <RoadSignCard 
                                    key={index}
                                    title={item.title}
                                    description={item.Description}
                                    image={item.img}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                    </div>

                    {/* WARNING SIGNS */}
                    <div className='mt-10'>
                        
                        <h1 className='text-white font-bold text-md bg-red-400 p-2 w-fit rounded-tr-2xl rounded-br-2xl'>Warning Signs</h1>
                        <div className='mt-3 flex flex-wrap justify-center items-center gap-5'>
                            {RoadSignsObj.WarningSigns.map((item, index) => (
                                <RoadSignCard 
                                    key={index}
                                    title={item.title}
                                    description={item.Description}
                                    image={item.img}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                    </div>

                    {/* INFORMATION SIGNS */}
                    <div className='mt-10'>
                        
                        <h1 className='text-white font-bold text-md bg-red-400 p-2 w-fit rounded-tr-2xl rounded-br-2xl'>Information Signs</h1>
                        <div className='mt-3 flex flex-wrap justify-center items-center gap-5'>
                            {RoadSignsObj.InformationSigns.map((item, index) => (
                                <RoadSignCard 
                                    key={index}
                                    title={item.title}
                                    description={item.Description}
                                    image={item.img}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center justify-center my-5'>
                        <Button
                        label='Go Home'
                        variant='outline'
                        onClick={() => navigate("/fundamentals")} 
                        className='font-bold hover:transform hover:scale-105 transition duration-200 ease-in-out'
                    />
                    </div>

                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default RoadSigns