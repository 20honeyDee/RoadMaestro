// import { useEffect, useState } from 'react'
import Car from '../assets/images/bg4.png'
import '../assets/Css/Home.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();


  return (
    <div className='bg-home home-body h-[100vh] relative overflow-hidden'>

      <div className='home h-[80vh] flex flex-col justify-center items-center gap-4 md:gap-2'>
        <span className='spanImgText z-10 flex flex-col justify-center items-center
        md:flex-row md:items-center'>

          {/* MAESTRO TEXT */}
          <span className='textMaestro flex flex-col justify-center'>
            <h1 className='font-bold text-white text-center' data-aos="fade-right">
              MAESTRO
            </h1>

            <h2 className='font-semibold text-sm' data-aos="zoom-in">
                MASTERING ROAD'S
                <span className='text-red-500'> BASICS</span>
            </h2>
          </span>
          
          <img src={Car} alt="car" id="car" data-aos="fade-left"
            style={{ aspectRatio: '1:1', width: '60%' }}/>
        </span>
        
        {/* Get started */}
        <div className='z-10 hover:transform hover:scale-105 font-bold'>
          <Button 
          label='Get Started'
          variant='primary'
          onClick={() => navigate("/fundamentals")}
        />
        </div>
        
        {/* Login and Signup button */}
        {/* <div className='btn flex gap-4 md:hidden' data-aos="fade-up">
          <Button
            type='submit'
            onClick= {() =>{
              console.log("Cliked login button");
              navigate("/login");
            }}
            label='Log In'
            variant='primary'
            textsize='xs'
          />
          <Button
            type='submit'
            onClick={() => {
              console.log("Clicked signup button");
              navigate("/signup");
            }}
            label='Sign up'
            variant='outline'
            textsize='xs'
          />
        </div> */}

      </div>

    </div>
  )
}

export default Home