// import React from 'react'
import Car from '../images/bg4.png'
import '../Css/Home.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  // const signup = () =>{
  //   alert("signup was clicked");
  // }

  return (
    <div className='bg-home home-body h-[100vh] relative'>
      <div className='home h-[80vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-white' data-aos="fade-right">
          MAESTRO
        </h1>

        <h2 className='font-semibold text-sm'
          data-aos="zoom-in">
            MASTERING ROAD'S
            <span className='text-red-500'> BASICS</span>
        </h2>

        <img src={Car} alt="car" id="car" data-aos="fade-left"
          style={{ aspectRatio: '1:1', width: '50%' }}
        />

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
    </div>
  )
}

export default Home