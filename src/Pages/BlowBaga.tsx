// import React from 'react'
import fundamentalbg from '../assets/images/background.png'
import CardHorizontal from '../components/CardHorizontal'
import BlowbagaImg from '../assets/Objects/Blowbaga'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'



const BlowBaga = () => {

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
          margin: '0 auto 5rem auto',
          backdropFilter: 'blur(10px)',
        }}
      >

        <div className='absolute inset-0 bg-white/5 backdrop-blur-sm overflow-y-scroll pb-5'>
            <h1 className='text-white text-center mt-10 text-2xl'>BLOWBAGA</h1>
            <div className='pb-5 w-[80vw] m-auto md:w-[70vw]' data-aos="fade-up">
              {BlowbagaImg.blowbagaImg.map((item, index) => (
                <CardHorizontal
                  key={index}
                  title={item.title ?? ''}
                  description={item.Description ?? ''}
                  imageUrl={item.img}
                  reverse={index % 2 == 0}
                />
              ))}

              <p className='text-white font-bold text-2xl text-center'>ACCESORIES</p>

              {BlowbagaImg.accesories.map((item, index) => (
                <CardHorizontal
                  key={index}
                  title={item.title ?? ''}
                  description={item.Description ?? ''}
                  imageUrl={item.img}
                />
              ))}
              
              <span className='flex justify-center items-center mb-10'>
                <Button
                  label='Next'
                  variant='secondary'
                  onClick={() => navigate("/fundamental/traffic_lights")}
                />
              </span>
              
            </div>
            
        </div>

        </div>
    </div>
  )
}

export default BlowBaga