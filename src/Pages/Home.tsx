// import React from 'react'
import Car from '../images/bg4.png'
import '../Css/Home.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-home home-body h-[100vh] relative overflow-hidden'>
      <div className='home h-[80vh] flex flex-col justify-center items-center gap-4'>
        <span className='z-10 flex flex-col justify-center items-center
        md:flex md:flex-row'>
          <span className='textMaestro'>
            <h1 className='font-bold text-white text-center' data-aos="fade-right">
              MAESTRO
            </h1>

            <h2 className='font-semibold text-sm'
              data-aos="zoom-in">
                MASTERING ROAD'S
                <span className='text-red-500'> BASICS</span>
            </h2>
          </span>
          

          <img src={Car} alt="car" id="car" data-aos="fade-left"
            style={{ aspectRatio: '1:1', width: '50%' }}/>
        </span>
        

        <div className='btn flex gap-4' data-aos="fade-up">
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
        </div>

      </div>

      <div id="contact" className='bg-red-600'>
        <h6 className='text-white'>Contact Us</h6>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
      </div>
    </div>
  )
}

export default Home