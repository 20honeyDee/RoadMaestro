import {useState} from 'react'
import Logo from '../images/logo.png'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  // check visibility of the menu
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  //close/hide the navbar when link is clicked
  const clickedLink = () =>{
    setIsVisible(false);
  };
  
  return (
    <div className=''>
        <div className='flex justify-between items-center p-2 shadow-lg'>
          <span className='flex items-center gap-1'>
            <img src={Logo} alt="Maestro" className='w-[30px] md:w-[40px]'/>
            <Link to="/" className='text-xs h1 md:text-md'>RoadMaestro</Link>
          </span>
          <button
            onClick={toggleMenu}
            className='md:hidden'
            >
            <svg height="20px" id="Layer_1" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </button>

          <div className='hidden md:flex font-montserrat text-sm font-semibold gap-3 text-black
          lg:text-md'>
            <Link to="/" onClick={clickedLink}>Home</Link>
            <Link to="/about" onClick={clickedLink}>About Us</Link>
            <Link to="/contact" onClick={clickedLink}>Contact</Link>
            {/* <Link to="/signup" onClick={clickedLink}>Sign Up</Link>
            <Link to="/login" onClick={clickedLink}>Log In</Link> */}
          </div>
        </div>

        <div className='md:hidden'>
          {isVisible && (
            <div className='links text-sm text-white absolute w-full shadow-lg bg-navbar-sm font-bold text-center py-2'>
              <Link to="/" onClick={clickedLink}>Home</Link>
              <Link to="/about" onClick={clickedLink}>About Us</Link>
              <Link to="/contact" onClick={clickedLink}>Contact</Link>
              {/* <Link to="/signup" onClick={clickedLink}>Sign Up</Link>
              <Link to="/login" onClick={clickedLink}>Log In</Link> */}
          </div>
          )}
        </div>

        
        
    </div>
  )
}

export default Navbar