// import React from 'react'
import fundamentalbg from '../assets/images/background.png';


const BlowBaga = () => {
  return (
    <div className='overflow-y-auto bg-home min-h-screen'>
        <div
        style={{
          backgroundImage: `url(${fundamentalbg})`,
          width: '100vw',
          minHeight: '100vh',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: '0 auto 5rem auto',
          backdropFilter: 'blur(10px)',
        }}
      >

        <div className='absolute inset-0 bg-white/5 backdrop-blur-xs'>
            <div>
                <h1 className='text-white'>BLOWBAGA</h1>


            </div>
            
        </div>

        </div>
    </div>
  )
}

export default BlowBaga