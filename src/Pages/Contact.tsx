// import React from 'react'
import '../Css/Contact.css'
import contact from '../images/contact.png'
import TextField from '../components/TextField'
import Buttons from '../components/Button'

const Contact = () => {

  const btnclick = () =>{
    // alert('btn submit was clicked');
  }


  return (
    <div className="bg-home contact-body h-[100vh] relative">
      <div className='contact-content flex flex-col justify-center items-center'>
        <img src={contact} alt="Contact Icon" style={{ aspectRatio: 'auto', width: '5rem', margin: '10px 0 0 0'}}/>
      
        <h1 className='font-semibold text-xl underline text-white'>Contact Us</h1>

        <form action="" className='flex flex-col justify-between items-center gap-4 bg-white rounded-xl my-3 mx-5 py-3 px-5 border-2 border-gray-500 shadow-md shadow-gray-400'>
          <div className='items-center'>
            <TextField
              label='First name: '
              type='text'
            />
            <TextField
              label='Last name:'
              type='text'
            />
            <TextField
              label='Email Address: '
              type='text'
            />
            <TextField
              label='Contact number'
              type='number'
            />

            <textarea 
              name="message" 
              id="msgarea" 
              placeholder='Enter your message here...' 
              cols={30}
              rows={5}
              required
              className='border w-full mt-4'
            ></textarea>
          </div>

          <Buttons 
            type='submit'
            label='Submit'
            variant='primary'
            onClick={btnclick}
          />
        </form>
      </div>

      
    </div>
  )
}

export default Contact