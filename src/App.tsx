import { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import Navbar from './Pages/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {

  useEffect(() => {
      AOS.init({
        duration: 2000, 
        once: true,
      });
    }, []);

    
  return (
    <div className='h-[100vh] overflow-hidden'>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
